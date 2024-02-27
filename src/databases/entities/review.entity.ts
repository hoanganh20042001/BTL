import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';


@Entity('review')
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'content', nullable: true })
  content: string;

  @Column({ name: 'conDate', nullable: true })
  conDate: Date;

  @Column({ name: 'value', nullable: true })
  value: number;

  @Column({ name: 'productId', nullable: true })
  productId: number;

  @Column({ name: 'userId', nullable: true })
  userId: number;
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
