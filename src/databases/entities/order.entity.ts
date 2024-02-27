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
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'productId', nullable: true })
  productId: number;

  @Column({ name: 'quantity', nullable: true })
  quantity: number;

  @Column({ name: 'userId', nullable: true })
  userId: number;

  @Column({ name: 'payId', nullable: true })
  payId: number;

  @Column({ name: 'status', default:0 })
  status: number;
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
