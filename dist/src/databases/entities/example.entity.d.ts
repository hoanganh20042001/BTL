import { BaseEntity } from 'typeorm';
export declare class Example extends BaseEntity {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
