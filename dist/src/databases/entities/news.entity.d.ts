import { BaseEntity } from 'typeorm';
export declare class Account extends BaseEntity {
    id: number;
    title: string;
    newDate: Date;
    view: number;
    liked: number;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
