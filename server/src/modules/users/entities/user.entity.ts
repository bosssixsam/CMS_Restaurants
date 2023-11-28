import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
//   import { Roles } from './role.entity';

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

  // @ManyToMany(() => Roles, (roles) => roles.id)
  // roles!: Roles[];

  @Column('boolean', { default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
