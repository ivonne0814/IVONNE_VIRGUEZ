import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { RefreshToken } from './refresh-token/entities/refresh-token.entity';
import { Task } from './task/entities/task.entity';
import { Reminder } from './reminder/entities/reminder.entity';
import { EventCalendar } from './calendar-event/entities/calendar-event.entity';
import { Category } from './category/entities/category.entity';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CalendarEventModule } from './calendar-event/calendar-event.module';
import { CategoryModule } from './category/category.module';
import { ReminderModule } from './reminder/reminder.module';
import { TaskModule } from './task/task.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
}),
    UserModule,
    AuthModule,
    CalendarEventModule,
    CategoryModule,
    ReminderModule,
    TaskModule,
    RefreshTokenModule,
  ],
})
export class AppModule {}

