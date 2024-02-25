import { BaseEntity } from 'typeorm';
export declare class Review extends BaseEntity {
    id: number;
    content: string;
    conDate: Date;
    value: number;
    productId: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}
