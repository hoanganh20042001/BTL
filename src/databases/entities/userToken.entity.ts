import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';


@Entity('userToken')
export class UserToken extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({ name: 'token' })
  token: string;

  @Column({ name: 'expired' })
  expired: string;

  @Column({ name: 'userId' })
  userId: number;

  @Column({ name: 'deviceInfo' })
  deviceInfo: string;

  @Column({ name: 'isActive' })
  isActive: number;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
