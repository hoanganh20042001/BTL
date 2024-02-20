import { BaseEntity } from 'typeorm';
export declare class Account extends BaseEntity {
    id: number;
    productId: number;
    quantity: number;
    userId: number;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}
