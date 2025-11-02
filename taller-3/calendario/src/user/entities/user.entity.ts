import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../../task/entities/task.entity';
import { EventCalendar} from '../../calendar-event/entities/calendar-event.entity';
import { Reminder } from '../../reminder/entities/reminder.entity';
import { RefreshToken } from '../../refresh-token/entities/refresh-token.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

@OneToMany(() => Task, (task) => task.user)
tasks!: Task[];

  @OneToMany(() => EventCalendar, (event) => event.user)
  events: EventCalendar[];

  @OneToMany(() => Reminder, (reminder) => reminder.user)
  reminders: Reminder[];

  @OneToMany(() => RefreshToken, (token) => token.user)
  refreshTokens: RefreshToken[];
}
