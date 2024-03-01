import { BaseApiResponse } from '../dto/auth/decorators';
import { RequestContext } from '../dto/auth/decorators/request-context.dto';
import { AuthTokenOutput, RefreshTokenInput } from '../dto/auth/dto/auth-token-output.dto';
import { SigninDto, forgetPassDto } from '../dto/auth/dto/sign-in.dto';
import { SignupDto, confirmationInput, resetPassword } from '../dto/auth/dto/sign-up.dto';
import { AuthService } from 'src/business/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(input: SignupDto): Promise<any>;
    loginStudent(input: SigninDto): Promise<AuthTokenOutput>;
    loginAdmin(input: SigninDto): Promise<AuthTokenOutput>;
    refreshToken(ctx: RequestContext, credential: RefreshTokenInput): Promise<BaseApiResponse<AuthTokenOutput>>;
    logout(req: any): Promise<{
        status: number;
        message: string;
    }>;
    forgetPassword(input: forgetPassDto): Promise<{
        status: number;
        message: string;
    }>;
    confirmForgetPassword(input: confirmationInput): Promise<{
        status: number;
        message: string;
    }>;
    resetPassword(input: resetPassword): Promise<import("../databases/entities/user.entity").User>;
}
