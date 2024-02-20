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
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: true })
  name: string;

  @Column({ name: 'image', nullable: true })
  image: string;

  @Column({ name: 'discount', nullable: true })
  discount: number;

  @Column({ name: 'categoryId', nullable: true })
  categoryId: number;

  @Column({ name: 'price', nullable: true })
  price: number;

  @Column({ name: 'isActive', nullable: true })
  isActive: number;

  @Column({ name: 'description', nullable: true })
  description: string;
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
