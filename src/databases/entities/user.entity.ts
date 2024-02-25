import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';


@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'userName' })
  userName: string;

  @Column({ name: 'passWord' })
  passWord: string;

  @Column({ name: 'roleId', default: 2 })
  roleId: number;

  @Column({ name: 'fullName' })
  fullName: string;

  @Column({ name: 'phoneNumber' })
  phoneNumber: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'addressId' })
  addressId: number;

  @Column({ name: 'isActive', default: 0 })
  isActive: number;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
