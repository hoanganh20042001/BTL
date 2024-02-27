import { BaseEntity } from 'typeorm';
export declare class Like extends BaseEntity {
    newsId: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}
