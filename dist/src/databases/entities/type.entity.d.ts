import { BaseEntity } from 'typeorm';
export declare class Type extends BaseEntity {
    id: number;
    name: string;
    description: Date;
    createdAt: Date;
    updatedAt: Date;
}
