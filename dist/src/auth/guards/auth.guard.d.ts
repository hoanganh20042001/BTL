import { ExecutionContext } from '@nestjs/common';
import { AuthService } from '../auth.service';
declare const AuthenticationGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthenticationGuard extends AuthenticationGuard_base {
    private readonly authService;
    constructor(authService: AuthService);
    canActivate(context: ExecutionContext): Promise<any>;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
