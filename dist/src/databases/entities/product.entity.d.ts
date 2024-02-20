import { BaseEntity } from 'typeorm';
export declare class Account extends BaseEntity {
    id: number;
    name: string;
    image: string;
    discount: number;
    categoryId: number;
    price: number;
    isActive: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
