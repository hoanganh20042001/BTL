import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserToken } from 'src/databases/entities/userToken.entity';
import { MailService } from 'src/mail/mail.service';
import { RoleRepository } from 'src/dao/role.repository';
import { UserRepository } from 'src/dao/user.repository';
import { SignupDto, confirmationInput, resetPassword } from 'src/dto/auth/dto/sign-up.dto';
import { SaveTokenDto } from 'src/dto/auth/dto/save-token.dto';
import { SigninDto, forgetPassDto } from 'src/dto/auth/dto/sign-in.dto';
import { AuthTokenOutput, UserAccessTokenClaims } from 'src/dto/auth/dto/auth-token-output.dto';
import { ChangePasswordDto } from 'src/dto/auth/dto/change-password.dto';
import { RequestContext } from 'src/dto/auth/decorators/request-context.dto';
import { UserTokenRepository } from 'src/dao/user-token.repository';
export declare class AuthService {
    private jwtService;
    private userTokenRepository;
    private userRepository;
    private roleRepository;
    private mailService;
    constructor(jwtService: JwtService, userTokenRepository: UserTokenRepository, userRepository: UserRepository, roleRepository: RoleRepository, mailService: MailService);
    hashPassword(password: string): Promise<string>;
    saveTokenDevice(data: SaveTokenDto): Promise<void>;
    checkPhoneNumber(phoneNumber: string): Promise<boolean>;
    checkEmail(email: string): Promise<boolean>;
    verificationCode(): Promise<string>;
    createUser(input: SignupDto): Promise<import("../databases/entities/user.entity").User>;
    confirmation(input: confirmationInput): Promise<{
        status: number;
        message: string;
    }>;
    getActiveUserToken(id: number, role?: any): Promise<UserToken> | null;
    comparePassword(password: string, storePasswordHash: string): Promise<boolean>;
    login(input: SigninDto): Promise<AuthTokenOutput>;
    loginAdmin(input: SigninDto): Promise<AuthTokenOutput>;
    decodeToken(token: string): Promise<string | {
        [key: string]: any;
    }>;
    refreshToken(ctx: RequestContext): Promise<AuthTokenOutput>;
    getAuthToken(ctx: RequestContext, user: UserAccessTokenClaims): Promise<AuthTokenOutput>;
    findTokenByUserId(id: any): Promise<UserToken>;
    tokenByUser(token: string): Promise<UserToken>;
    logout(req: Request): Promise<{
        status: number;
        message: string;
    }>;
    authenticate(input: SigninDto): Promise<import("../databases/entities/user.entity").User>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<{
        status: boolean;
        message: string;
    }>;
    forgetPassword(input: forgetPassDto): Promise<{
        status: number;
        message: string;
    }>;
    confirmationForgetPassword(input: confirmationInput): Promise<{
        status: number;
        message: string;
    }>;
    resetPassword(input: resetPassword): Promise<import("../databases/entities/user.entity").User>;
}
