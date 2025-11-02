import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

  create(data: Partial<Category>) {
    return this.repo.save(this.repo.create(data));
  }

  findAll() {
    return this.repo.find({ relations: ['tasks'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['tasks'] });
  }

  update(id: number, data: Partial<Category>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
