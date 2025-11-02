import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reminder } from './entities/reminder.entity';

@Injectable()
export class ReminderService {
  constructor(@InjectRepository(Reminder) private repo: Repository<Reminder>) {}

  create(data: Partial<Reminder>) {
    return this.repo.save(this.repo.create(data));
  }

  findAll() {
    return this.repo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['user'] });
  }

  update(id: number, data: Partial<Reminder>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
  
}
