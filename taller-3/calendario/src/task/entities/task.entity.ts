import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => Category, (category) => category.tasks, { onDelete: 'CASCADE' })
  category: Category;

@ManyToOne(() => User, (user) => user.refreshTokens)
user: User;
}
