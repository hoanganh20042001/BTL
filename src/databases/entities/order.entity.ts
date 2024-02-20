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


@Entity('order')
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'productId', nullable: true })
  productId: number;

  @Column({ name: 'quantity', nullable: true })
  quantity: number;

  @Column({ name: 'userId', nullable: true })
  userId: number;

  @Column({ name: 'payId', nullable: true })
  payId: string;
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}