import { UserAccessTokenClaims } from '../dto/auth-token-output.dto';
export declare class RequestContext {
    requestID: string;
    url: string;
    ip: string;
    user: UserAccessTokenClaims;
}
