import { BaseEntity } from 'typeorm';
export declare class Account extends BaseEntity {
    id: number;
    status: string;
    descriptions: string;
    createdAt: Date;
    updatedAt: Date;
}
