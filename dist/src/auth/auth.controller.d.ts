import { AuthService } from './auth.service';
import { BaseApiResponse } from './decorators';
import { RequestContext } from './decorators/request-context.dto';
import { AuthTokenOutput, RefreshTokenInput } from './dto/auth-token-output.dto';
import { SigninDto } from './dto/sign-in.dto';
import { SignupDto } from './dto/sign-up.dto';
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
}
