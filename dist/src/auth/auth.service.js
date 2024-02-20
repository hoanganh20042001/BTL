"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const messageError_1 = require("../messageError");
const role_repository_1 = require("../role/role.repository");
const user_repository_1 = require("../user/user.repository");
const user_token_repository_1 = require("../user-token/user-token.repository");
const auth_token_output_dto_1 = require("./dto/auth-token-output.dto");
const moment = require('moment');
let AuthService = class AuthService {
    constructor(jwtService, userTokenRepository, userRepository, roleRepository) {
        this.jwtService = jwtService;
        this.userTokenRepository = userTokenRepository;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    async hashPassword(password) {
        return await (0, bcrypt_1.hash)(password, 12);
    }
    async saveTokenDevice(data) {
        const { userId, token, expired } = data;
        const listUserTokenOld = await this.userTokenRepository.find({ userId: userId });
        const newUserToken = await this.userTokenRepository.create({
            userId,
            token,
            expired,
            isActive: 1
        });
        await newUserToken.save();
    }
    async checkPhoneNumber(phoneNumber) {
        const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (vnf_regex.test(phoneNumber) == false) {
            return false;
        }
        else
            return true;
    }
    async checkEmail(email) {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email) == false) {
            return false;
        }
        else
            return true;
    }
    async createUser(input) {
        const findUserByEmail = await this.userRepository.findOne({
            email: input.email
        });
        if (findUserByEmail)
            throw new common_1.BadRequestException(messageError_1.MESSAGE.username_or_identity_or_email_already_exist);
        if (await this.checkPhoneNumber(input.phoneNumber) === false) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.phoneNumber_is_not_format);
        }
        if (await this.checkEmail(input.email) === false) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.email_is_not_format);
        }
        const newUser = await this.userRepository.create(input);
        newUser.passWord = await this.hashPassword(input.passWord);
        return await newUser.save();
    }
    async getActiveUserToken(id, role) {
        const activeUser = await this.userTokenRepository.findOne({
            userId: id,
            isActive: 1
        });
        return activeUser;
    }
    async comparePassword(password, storePasswordHash) {
        return await (0, bcrypt_1.compare)(password, storePasswordHash);
    }
    async login(input) {
        const { email, passWord } = input;
        const user = await this.userRepository.findOne({
            email: input.email,
            roleId: 2
        });
        if (!user) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.user_not_found);
        }
        const comparePassword = await this.comparePassword(passWord, user.passWord);
        if (!comparePassword) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.invalid_password);
        }
        if (user.isActive == 0) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.is_not_active);
        }
        const role = await this.roleRepository.findOne(user.id);
        const roleString = role.name;
        const payload = {
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
            accessToken: this.jwtService.sign(Object.assign(Object.assign({}, payload), subject), {
                expiresIn: process.env.JWT_REFRESH_EXPIRED_TOKEN_AFTER
            }),
            user: Object.assign({}, user)
        };
        const dataToken = {
            userId: user.id,
            token: authToken.accessToken,
            expired: moment(new Date()).add(process.env.JWT_EXPIRED_TOKEN_AFTER, 'milliseconds').format('x'),
            isActive: 1
        };
        await this.saveTokenDevice(dataToken);
        return (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.AuthTokenOutput, authToken, {
            excludeExtraneousValues: true
        });
    }
    async loginAdmin(input) {
        const { email, passWord } = input;
        const user = await this.userRepository.findOne({
            email: input.email,
            roleId: 1
        });
        if (!user) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.user_not_found);
        }
        const comparePassword = await this.comparePassword(passWord, user.passWord);
        if (!comparePassword) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.invalid_password);
        }
        if (user.isActive == 0) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.is_not_active);
        }
        const role = await this.roleRepository.findOne(user.id);
        const roleString = role.name;
        const payload = {
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
            accessToken: this.jwtService.sign(Object.assign(Object.assign({}, payload), subject), {
                expiresIn: process.env.JWT_REFRESH_EXPIRED_TOKEN_AFTER
            }),
            user: Object.assign({}, user)
        };
        const dataToken = {
            userId: user.id,
            token: authToken.accessToken,
            expired: moment(new Date()).add(process.env.JWT_EXPIRED_TOKEN_AFTER, 'milliseconds').format('x'),
            isActive: 1
        };
        await this.saveTokenDevice(dataToken);
        return (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.AuthTokenOutput, authToken, {
            excludeExtraneousValues: true
        });
    }
    async decodeToken(token) {
        try {
            return this.jwtService.decode(token);
        }
        catch (error) {
            return null;
        }
    }
    async refreshToken(ctx) {
        let user;
        if (ctx.user.role) {
            user = await this.userRepository.findOne(ctx.user.id);
        }
        if (!user) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.invalid_user_id);
        }
        return this.getAuthToken(ctx, user);
    }
    async getAuthToken(ctx, user) {
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
            accessToken: this.jwtService.sign(Object.assign(Object.assign({}, payload), subject), {
                expiresIn: process.env.JWT_EXPIRED_TOKEN_AFTER
            }),
            user: Object.assign({}, user)
        };
        const dataToken = {
            userId: user.id,
            token: authToken.accessToken,
            expired: moment(new Date()).add(process.env.JWT_EXPIRED_TOKEN_AFTER, 'milliseconds').format('x'),
            isActive: 1
        };
        await this.saveTokenDevice(dataToken);
        return (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.AuthTokenOutput, authToken, {
            excludeExtraneousValues: true
        });
    }
    async findTokenByUserId(id) {
        return await this.userTokenRepository.findOne({ userId: id });
    }
    async tokenByUser(token) {
        const findUserToken = await this.userTokenRepository.findOne({
            token: token
        });
        return findUserToken;
    }
    async logout(req) {
        const authToken = await this.userTokenRepository.findOne({
            token: req.headers.authorization.split('Bearer ')[1]
        });
        if (!authToken) {
            throw new common_1.BadRequestException();
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
    async authenticate(input) {
        const { email, passWord } = input;
        const user = await this.userRepository.findOne({
            email: input.email
        });
        if (!user) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.user_not_found);
        }
        const comparePassword = await this.comparePassword(passWord, user.passWord);
        if (!comparePassword) {
            throw new common_1.BadRequestException(messageError_1.MESSAGE.invalid_password);
        }
        return user;
    }
    async changePassword(changePasswordDto) {
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
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_token_repository_1.UserTokenRepository,
        user_repository_1.UserRepository,
        role_repository_1.RoleRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map