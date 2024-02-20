import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserToken } from 'src/databases/entities/userToken.entity';
import { RoleRepository } from 'src/role/role.repository';
import { UserRepository } from 'src/user/user.repository';
import { UserTokenRepository } from 'src/user-token/user-token.repository';
import { RequestContext } from './decorators/request-context.dto';
import { AuthTokenOutput, UserAccessTokenClaims } from './dto/auth-token-output.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { SaveTokenDto } from './dto/save-token.dto';
import { SigninDto } from './dto/sign-in.dto';
import { SignupDto } from './dto/sign-up.dto';
export declare class AuthService {
    private jwtService;
    private userTokenRepository;
    private userRepository;
    private roleRepository;
    constructor(jwtService: JwtService, userTokenRepository: UserTokenRepository, userRepository: UserRepository, roleRepository: RoleRepository);
    hashPassword(password: string): Promise<string>;
    saveTokenDevice(data: SaveTokenDto): Promise<void>;
    checkPhoneNumber(phoneNumber: string): Promise<boolean>;
    checkEmail(email: string): Promise<boolean>;
    createUser(input: SignupDto): Promise<import("../databases/entities/user.entity").User>;
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
}
