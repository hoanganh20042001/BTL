import { BaseEntity } from 'typeorm';
export declare class Discount extends BaseEntity {
    id: number;
    name: string;
    value: number;
    isActive: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
