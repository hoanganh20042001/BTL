import { Strategy } from 'passport-local';
import { AuthService } from 'src/business/auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
}
export {};
