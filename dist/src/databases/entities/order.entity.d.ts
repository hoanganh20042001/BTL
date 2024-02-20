import { BaseEntity } from 'typeorm';
export declare class Account extends BaseEntity {
    id: number;
    productId: number;
    quantity: number;
    userId: number;
    payId: string;
    createdAt: Date;
    updatedAt: Date;
}
