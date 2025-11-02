import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventCalendar } from './entities/calendar-event.entity';

@Injectable()
export class CalendarEventService {
  constructor(@InjectRepository(EventCalendar) private repo: Repository<EventCalendar>) {}

  create(data: Partial<EventCalendar>) {
    return this.repo.save(this.repo.create(data));
  }

  findAll() {
    return this.repo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['user'] });
  }

  update(id: number, data: Partial<EventCalendar>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
