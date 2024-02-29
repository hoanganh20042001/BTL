import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { plainToClass } from 'class-transformer';
import { Request } from 'express';
import { UserToken } from 'src/databases/entities/userToken.entity';
import { MESSAGE } from 'src/messageError';
import { RoleRepository } from 'src/role/role.repository';
import { UserRepository } from 'src/user/user.repository';
import { UserTokenRepository } from 'src/user-token/user-token.repository';

import { AuthPayload } from './auth-payload.interface';
import { RequestContext } from './decorators/request-context.dto';
import { AuthTokenOutput, saveTokenCodeDto, UserAccessTokenClaims } from './dto/auth-token-output.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { SaveTokenDto } from './dto/save-token.dto';
import { forgetPassDto, SigninDto } from './dto/sign-in.dto';
import { confirmationInput, resetPassword, SignupDto } from './dto/sign-up.dto';
import { MailService } from 'src/mail/mail.service';

const moment = require('moment');
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userTokenRepository: UserTokenRepository,
    private userRepository: UserRepository,
    private roleRepository: RoleRepository,
    private mailService: MailService,
  ) { }

  // private readonly _server: OAuth2Server;

  // get server(): OAuth2Server {
  //   return this._server;
  // }

  //function hash password
  async hashPassword(password: string): Promise<string> {
    return await hash(password, 12);
  }

  async saveTokenDevice(data: SaveTokenDto) {
    const { userId, token, expired } = data;

    const listUserTokenOld = await this.userTokenRepository.find({ userId: userId });
    // for (const element of listUserTokenOld.list) {
    //   element.isActive = 0;
    //   await element.save();
    // }
    const newUserToken = await this.userTokenRepository.create({
      userId,
      token,
      expired,
      isActive: 1
    });
    await newUserToken.save();
  }

  async checkPhoneNumber(phoneNumber: string) {
    const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (vnf_regex.test(phoneNumber) == false) { return false }
    else return true;
  }

  async checkEmail(email: string) {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(email) == false) { return false }
    else return true;
  }
  async verificationCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return code;
  }

  //create user
  async createUser(input: SignupDto) {


    const findUserByEmail = await this.userRepository.findOne({
      email: input.email
    });
    if ( findUserByEmail)
      throw new BadRequestException(MESSAGE.username_or_identity_or_email_already_exist);

    if (await this.checkPhoneNumber(input.phoneNumber) === false) {
      throw new BadRequestException(MESSAGE.phoneNumber_is_not_format);
    }

    if (await this.checkEmail(input.email) === false) {
      throw new BadRequestException(MESSAGE.email_is_not_format);
    }
    try {
      const newUser = await this.userRepository.create(input);
      newUser.passWord = await this.hashPassword(input.passWord);
      newUser.code = await this.verificationCode();
      newUser.isActive = 0;

      this.mailService.sendNewUser({
        emailTo: input.email,
        subject: 'Đăng ký',
        name: input.fullName,
        code: newUser.code,
      })
      return await newUser.save();
    } catch (err) {
      throw new InternalServerErrorException({
        result: false,
        message: 'Singup error',
        data: null,
        statusCode: 500,
      });
    }
  }

  async confirmation(input: confirmationInput) {
    try {
      const findUser = await this.userRepository.findOne({

        email: input.email,
        code: input.code,
      });
      console.log(findUser);

      if (!findUser) {
        throw new BadRequestException();
      }
      findUser.isActive = 1;
      this.mailService.sendAccountVerification({
        emailTo: input.email,
        subject: 'Xác nhận đăng ký tài khoản.',
      })
      // const updateUser=await this.userRepository.update(findUser.id, { isActive: 1 });
      findUser.save();
      return {
        status: 200,
        message: 'Success'
      };
    } catch (err) {
      throw new InternalServerErrorException({
        result: false,
        message: 'Confirmation error',
        data: null,
        statusCode: 500,
      });
    }
  }
  
  async getActiveUserToken(id: number, role?): Promise<UserToken> | null {
    const activeUser = await this.userTokenRepository.findOne({
      userId: id,
      isActive: 1
    });
    // query.where('ut.userId = :id', { id });

    // query.andWhere('ut.isActive = 1');
    return activeUser;
  }

  //function compare password param with user password in database
  async comparePassword(password: string, storePasswordHash: string): Promise<boolean> {
    return await compare(password, storePasswordHash);
  }
  async login(input: SigninDto) {
    const { email, passWord } = input;
    const user = await this.userRepository.findOne({
      email: input.email,
      roleId: 2
    });
    if (!user) {
      throw new BadRequestException(MESSAGE.user_not_found);
    }

    const comparePassword = await this.comparePassword(passWord, user.passWord);
    if (!comparePassword) {
      throw new BadRequestException(MESSAGE.invalid_password);
    }
    if (user.isActive == 0) {
      throw new BadRequestException(MESSAGE.is_not_active);
    }
    const role = await this.roleRepository.findOne(user.id);

    const roleString = role.name;

    const payload: AuthPayload = {
      id: user.id,
      email: email,
      role: roleString
    };
    const subject = { sub: user.id };
    const authToken = {
      refreshToken: this.jwtService.sign(subject, {
        secret: process.env.JWT_SECRET_KEY,
        expiresIn: process.env.JWT_EXPIRED_TOKEN_AFTER
      }),
      accessToken: this.jwtService.sign(
        {
          ...payload,
          ...subject
        },
        {
          expiresIn: process.env.JWT_REFRESH_EXPIRED_TOKEN_AFTER
        }
      ),
      user: { ...user }
    };
    const dataToken = {
      userId: user.id,
      token: authToken.accessToken,
      expired: moment(new Date()).add(process.env.JWT_EXPIRED_TOKEN_AFTER, 'milliseconds').format('x'),
      isActive: 1
    };
    await this.saveTokenDevice(dataToken);

    return plainToClass(AuthTokenOutput, authToken, {
      excludeExtraneousValues: true
    });
  }

  async loginAdmin(input: SigninDto) {
    const { email, passWord } = input;
    const user = await this.userRepository.findOne({
      email: input.email,
      roleId: 1
    });
    if (!user) {
      throw new BadRequestException(MESSAGE.user_not_found);
    }

    const comparePassword = await this.comparePassword(passWord, user.passWord);
    if (!comparePassword) {
      throw new BadRequestException(MESSAGE.invalid_password);
    }
    if (user.isActive == 0) {
      throw new BadRequestException(MESSAGE.is_not_active);
    }
    const role = await this.roleRepository.findOne(user.id);

    const roleString = role.name;

    const payload: AuthPayload = {
      id: user.id,
      email: email,
      role: roleString
    };
    const subject = { sub: user.id };
    const authToken = {
      refreshToken: this.jwtService.sign(subject, {
        secret: process.env.JWT_SECRET_KEY,
        expiresIn: process.env.JWT_EXPIRED_TOKEN_AFTER
      }),
      accessToken: this.jwtService.sign(
        {
          ...payload,
          ...subject
        },
        {
          expiresIn: process.env.JWT_REFRESH_EXPIRED_TOKEN_AFTER
        }
      ),
      user: { ...user }
    };
    const dataToken = {
      userId: user.id,
      token: authToken.accessToken,
      expired: moment(new Date()).add(process.env.JWT_EXPIRED_TOKEN_AFTER, 'milliseconds').format('x'),
      isActive: 1
    };
    await this.saveTokenDevice(dataToken);

    return plainToClass(AuthTokenOutput, authToken, {
      excludeExtraneousValues: true
    });
  }

  async decodeToken(token: string) {
    try {
      return this.jwtService.decode(token);
    } catch (error) {
      return null;
    }
  }

  async refreshToken(ctx: RequestContext): Promise<AuthTokenOutput> {
    let user;
    if (ctx.user.role) {
      user = await this.userRepository.findOne(ctx.user.id);
    }
    if (!user) {
      throw new BadRequestException(MESSAGE.invalid_user_id);
    }
    return this.getAuthToken(ctx, user);
  }

  async getAuthToken(ctx: RequestContext, user: UserAccessTokenClaims): Promise<AuthTokenOutput> {
    const subject = { sub: user.id };
    const payload = {
      username: user.username,
      sub: user.id
    };
    const authToken = {
      refreshToken: this.jwtService.sign(subject, {
        secret: process.env.JWT_REFRESH_SECRET_KEY,
        expiresIn: process.env.JWT_REFRESH_EXPIRED_TOKEN_AFTER
      }),
      accessToken: this.jwtService.sign(
        {
          ...payload,
          ...subject
        },
        {
          expiresIn: process.env.JWT_EXPIRED_TOKEN_AFTER
        }
      ),
      user: { ...user }
    };
    const dataToken = {
      userId: user.id,
      token: authToken.accessToken,
      expired: moment(new Date()).add(process.env.JWT_EXPIRED_TOKEN_AFTER, 'milliseconds').format('x'),
      isActive: 1
    };
    await this.saveTokenDevice(dataToken);
    return plainToClass(AuthTokenOutput, authToken, {
      excludeExtraneousValues: true
    });
  }

  async findTokenByUserId(id) {
    return await this.userTokenRepository.findOne({ userId: id });
  }

  async tokenByUser(token: string) {
    const findUserToken = await this.userTokenRepository.findOne({
      token: token
    });
    return findUserToken;
  }
  async logout(req: Request) {
    const authToken = await this.userTokenRepository.findOne({
      token: req.headers.authorization.split('Bearer ')[1]
    });
    if (!authToken) {
      throw new BadRequestException();
    }
    const userToken = await this.userTokenRepository.findOne({
      token: authToken.token
    });
    await this.userTokenRepository.update(userToken.id, { isActive: 0 });
    return {
      status: 200,
      message: 'Success'
    };
  }

  async authenticate(input: SigninDto) {
    const { email, passWord } = input;
    const user = await this.userRepository.findOne({
      email: input.email
    });
    // console.log(user._id);
    if (!user) {
      throw new BadRequestException(MESSAGE.user_not_found);
    }

    const comparePassword = await this.comparePassword(passWord, user.passWord);
    if (!comparePassword) {
      throw new BadRequestException(MESSAGE.invalid_password);
    }
    return user;
  }

  async changePassword(changePasswordDto: ChangePasswordDto) {
    const { oldPassword, newPassword, userId } = changePasswordDto;
    const user = await this.userRepository.findOne({ id: userId });
    const comparePassword = await this.comparePassword(oldPassword, user.passWord);

    if (!comparePassword) {
      return { status: false, message: 'Mật khẩu cũ không đúng!' };
    }

    user.passWord = await this.hashPassword(newPassword);

    await user.save();
    return { status: true, message: 'Đổi mật khẩu thành công!' };
  }

  async forgetPassword(input: forgetPassDto) {
    const findUserByEmail = await this.userRepository.findOne({
      email: input.email
    });
    console.log(findUserByEmail);
    if (!findUserByEmail) {
      throw new BadRequestException(MESSAGE.user_not_found);
    }
    try {

      findUserByEmail.forgetPassCode = await this.verificationCode();
      this.mailService.sendNewPassword({
        emailTo: input.email,
        subject: 'Quên mật khẩu',
        name: findUserByEmail.fullName,
        code: findUserByEmail.forgetPassCode,
      })
      await findUserByEmail.save();
      return { status: 200, message: 'Đã gửi mã đặt lại mật khẩu về email' };
    } catch (err) {
      throw new InternalServerErrorException({
        result: false,
        message: 'Forget Password error',
        data: null,
        statusCode: 500,
      });
    }
  }

  async confirmationForgetPassword(input: confirmationInput) {
    const findUser = await this.userRepository.findOne({
      email: input.email,

    });
    if (!findUser) {
      throw new BadRequestException(MESSAGE.user_not_found);
    }
    if (findUser.forgetPassCode === input.code) {
      return {
        status: 200,
        message: 'Success'
      };
    }
    else {
      return {
        status: 500,
        message: 'Fail'
      };
    }
  }

  async resetPassword(input: resetPassword) {

    const findUser = await this.userRepository.findOne({
      email: input.email
    });
    if (!findUser) {
      throw new BadRequestException(MESSAGE.user_not_found);
    }
    if (input.passWord != input.repassWord) {
      throw new BadRequestException('reset pass fail');
    }
    findUser.passWord = await this.hashPassword(input.passWord);

    return await findUser.save();

  }
}
