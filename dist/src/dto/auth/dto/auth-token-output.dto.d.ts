import { Account } from 'src/databases/entities/accounts.entity';
export declare class AuthTokenOutput {
    accessToken: string;
    refreshToken: string;
    user: Account;
}
export declare class AuthTokenOutput2 {
    accessToken: string;
    refreshToken: string;
}
export declare class UserAccessTokenClaims {
    id: number;
    username: string;
    role: string;
}
export declare class UserRefreshTokenClaims {
    id: number;
}
export declare class RefreshTokenInput {
    refreshToken: string;
}
export declare class saveTokenCodeDto {
    code: string;
    accessToken: string;
    refreshToken: string;
}
