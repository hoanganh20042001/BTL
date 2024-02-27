import { BaseEntity } from 'typeorm';
export declare class Like extends BaseEntity {
    productId: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}
