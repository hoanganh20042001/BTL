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


@Entity('pay')
export class Pay extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'accountNumber', nullable: true })
  accountNumber: string;

  @Column({ name: 'date', nullable: true })
  date: Date;

  @Column({ name: 'cost', nullable: true })
  cost: number;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'bankName', nullable: true })
  bankName: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
