import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';


@Entity('like')
export class Like extends BaseEntity {
  @PrimaryColumn()
  newsId: number;

  @PrimaryColumn()
  userId: number;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
