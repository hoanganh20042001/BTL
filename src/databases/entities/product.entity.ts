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


@Entity('product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: true })
  name: string;

  @Column({ name: 'image', nullable: true })
  image: string;

  @Column({ name: 'discount', nullable: true })
  discount: number;

  @Column({ name: 'discountedPrice', default:0 })
  discountedPrice: number;

  @Column({ name: 'categoryId', nullable: true })
  categoryId: number;

  @Column({ name: 'typeId', nullable: true })
  typeId: number;

  @Column({ name: 'brandId', nullable: true })
  brandId: number;

  @Column({ name: 'quantity', nullable: true })
  quantity: number;

  @Column({ name: 'price', nullable: true })
  price: number;

  @Column({ name: 'sold', nullable: true })
  sold: number;

  @Column({ name: 'date', nullable: true })
  date:Date;

  @Column({ name: 'status', default:'AVAILABLE'})
  status: string;

  @Column({ name: 'description', nullable: true })
  description: string;
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
