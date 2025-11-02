import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { EventCalendar } from '../../calendar-event/entities/calendar-event.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Reminder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

 @Column({ type: 'datetime' })
remindAt: Date;

  @OneToOne(() => EventCalendar, (event) => event.reminder, { onDelete: 'CASCADE' })
  @JoinColumn()
  event: EventCalendar;

  @ManyToOne(() => User, (user) => user.reminders, { onDelete: 'CASCADE' })
  user: User;
}
