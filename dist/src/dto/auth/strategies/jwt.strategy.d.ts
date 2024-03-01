import { Strategy } from 'passport-jwt';
import { AuthPayload } from '../auth-payload.interface';
declare const JsonWebTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JsonWebTokenStrategy extends JsonWebTokenStrategy_base {
    constructor();
    validate(payload: AuthPayload): Promise<{
        email: string;
        id: string | number;
        role: string;
    }>;
}
export {};
