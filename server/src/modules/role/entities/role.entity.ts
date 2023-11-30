import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  ManyToOne,
} from 'typeorm';

import { Department } from 'modules/department/entities';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('array')
  permission!: number[];

  @ManyToOne(() => Department, (department) => department.id)
  department_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
