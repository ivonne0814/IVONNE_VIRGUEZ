import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventCalendar } from './entities/calendar-event.entity';
import { CalendarEventService } from './calendar-event.service';
import { CalendarEventController } from './calendar-event.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EventCalendar])],
  providers: [CalendarEventService],
  controllers: [CalendarEventController],
})
export class CalendarEventModule {}
