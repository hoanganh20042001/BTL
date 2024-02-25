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


@Entity('news')
export class News extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title', nullable: true })
  title: string;

  @Column({ name: 'newDate', nullable: true })
  newDate: Date;

  @Column({ name: 'view', nullable: true })
  view: number;

  @Column({ name: 'liked', nullable: true })
  liked: number;

  // @Column({ name: 'userId', nullable: true })
  // userId: number;

  @Column({ name: 'content', nullable: true })
  content: string;
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
