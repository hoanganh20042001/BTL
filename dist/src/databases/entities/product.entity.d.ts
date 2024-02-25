import { BaseEntity } from 'typeorm';
export declare class Product extends BaseEntity {
    id: number;
    name: string;
    image: string;
    discount: number;
    categoryId: number;
    typeId: number;
    brandId: number;
    quantity: number;
    price: number;
    sold: number;
    date: Date;
    status: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
