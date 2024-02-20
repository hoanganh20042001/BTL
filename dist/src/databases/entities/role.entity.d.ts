import { BaseEntity } from 'typeorm';
export declare class Role extends BaseEntity {
    id: number;
    name: string;
    isActive: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
