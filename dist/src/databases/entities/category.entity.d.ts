import { BaseEntity } from 'typeorm';
export declare class Category extends BaseEntity {
    id: number;
    name: string;
    description: Date;
    createdAt: Date;
    updatedAt: Date;
}
