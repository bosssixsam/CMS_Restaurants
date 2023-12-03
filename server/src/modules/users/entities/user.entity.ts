import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Role } from 'modules/role/entities';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
    default: null,
  })
  avatar: string;

  @Column({ length: 500 })
  name: string;

  @Column('varchar')
  username: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column({
    type: 'int',
    array: true,
    nullable: true,
  })
  roles!: number;

  @Column('boolean', { default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
