import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    userName: string;
    passWord: string;
    roleId: number;
    fullName: string;
    phoneNumber: string;
    email: string;
    addressId: number;
    isActive: number;
    createdAt: Date;
    updatedAt: Date;
}
