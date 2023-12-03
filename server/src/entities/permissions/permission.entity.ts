import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({
    nullable: true,
  })
  created_at: string;

  @Column({
    nullable: true,
  })
  update_at: string;

  @Column({
    nullable: true,
  })
  delete_at: string;
}
