import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  create(data: Partial<Task>) {
    return this.repo.save(this.repo.create(data));
  }

  findAll() {
    return this.repo.find({ relations: ['user', 'category'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['user', 'category'] });
  }

  update(id: number, data: Partial<Task>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
