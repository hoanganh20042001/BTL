import { ExecutionContext } from '@nestjs/common';
import { AuthService } from 'src/business/auth.service';
declare const JwtRefreshGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtRefreshGuard extends JwtRefreshGuard_base {
    private readonly authService;
    constructor(authService: AuthService);
    canActivate(context: ExecutionContext): Promise<any>;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
