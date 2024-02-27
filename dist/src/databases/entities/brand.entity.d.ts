import { BaseEntity } from 'typeorm';
export declare class Brand extends BaseEntity {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
