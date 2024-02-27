import { BaseEntity } from 'typeorm';
export declare class Order extends BaseEntity {
    id: number;
    productId: number;
    quantity: number;
    userId: number;
    payId: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
