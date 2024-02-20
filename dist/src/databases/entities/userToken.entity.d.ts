import { BaseEntity } from 'typeorm';
export declare class UserToken extends BaseEntity {
    id: number;
    token: string;
    expired: string;
    userId: number;
    deviceInfo: string;
    isActive: number;
    createdAt: Date;
    updatedAt: Date;
}
