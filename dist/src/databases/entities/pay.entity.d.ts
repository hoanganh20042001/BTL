import { BaseEntity } from 'typeorm';
export declare class Account extends BaseEntity {
    id: number;
    accountNumber: string;
    date: Date;
    cost: number;
    status: string;
    bankName: string;
    createdAt: Date;
    updatedAt: Date;
}
