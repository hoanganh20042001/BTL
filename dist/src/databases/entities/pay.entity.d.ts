import { BaseEntity } from 'typeorm';
export declare class Pay extends BaseEntity {
    id: number;
    accountNumber: string;
    date: Date;
    cost: number;
    discountId: number;
    userId: number;
    status: string;
    bankName: string;
    createdAt: Date;
    updatedAt: Date;
}
