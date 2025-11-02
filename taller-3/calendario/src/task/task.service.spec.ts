import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

describe('TaskService', () => {
  let service: TaskService;
  let repo: Repository<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: getRepositoryToken(Task),
          useValue: {
            create: jest.fn().mockImplementation((data) => data),
            save: jest.fn().mockImplementation((data) => Promise.resolve({ id: 1, ...data })),
            find: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockImplementation(({ where, relations }) => Promise.resolve({ id: 1, title: 'Test task' })),
            update: jest.fn().mockResolvedValue({ affected: 1 }),
            delete: jest.fn().mockResolvedValue({ affected: 1 }),
          },
        },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
    repo = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a task', async () => {
    const data = { title: 'New Task' };
    const result = await service.create(data);
    expect(repo.create).toHaveBeenCalledWith(data);
    expect(repo.save).toHaveBeenCalled();
    expect(result).toEqual({ id: 1, ...data });
  });

  it('should find all tasks', async () => {
    await service.findAll();
    expect(repo.find).toHaveBeenCalled();
  });

  it('should find one task', async () => {
    await service.findOne(1);
    expect(repo.findOne).toHaveBeenCalledWith({ where: { id: 1 }, relations: ['user', 'category'] });
  });

  it('should update a task', async () => {
    await service.update(1, { title: 'Updated Task' });
    expect(repo.update).toHaveBeenCalledWith(1, { title: 'Updated Task' });
  });

  it('should remove a task', async () => {
    await service.remove(1);
    expect(repo.delete).toHaveBeenCalledWith(1);
  });
});
