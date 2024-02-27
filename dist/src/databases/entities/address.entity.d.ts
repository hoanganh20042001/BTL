import { BaseEntity } from 'typeorm';
export declare class Address extends BaseEntity {
    id: number;
    name: string;
    userId: number;
    note: string;
    createdAt: Date;
    updatedAt: Date;
}
