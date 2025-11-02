import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

describe('TaskController', () => {
  let controller: TaskController;
  let service: TaskService;
  let repo: Repository<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        TaskService,
        {
          provide: getRepositoryToken(Task),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get<TaskService>(TaskService);
    repo = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all tasks', async () => {
    const mockTasks = [
      { id: 1, title: 'Test Task', description: 'Unit test task', completed: false },
    ];
    jest.spyOn(service, 'findAll').mockResolvedValue(mockTasks as any);

    const result = await controller.findAll();
    expect(result).toEqual(mockTasks);
  });

  it('should create a task', async () => {
    const dto = { title: 'New Task', description: 'Testing', completed: false };
    const createdTask = { id: 1, ...dto };

    jest.spyOn(service, 'create').mockResolvedValue(createdTask as any);

    const result = await controller.create(dto);
    expect(result).toEqual(createdTask);
  });
});
