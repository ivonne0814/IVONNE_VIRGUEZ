import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Reminder } from '../../reminder/entities/reminder.entity';

@Entity()
export class EventCalendar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'datetime' })
date: Date;

  @ManyToOne(() => User, (user) => user.events, { onDelete: 'CASCADE' })
  user: User;

  @OneToOne(() => Reminder, (reminder) => reminder.event)
  reminder: Reminder;
}
