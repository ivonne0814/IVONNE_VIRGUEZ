import { Test, TestingModule } from '@nestjs/testing';
import { ReminderService } from './reminder.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Reminder } from './entities/reminder.entity';
import { Repository } from 'typeorm';

describe('ReminderService', () => {
  let service: ReminderService;
  let repo: Repository<Reminder>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReminderService,
        {
          provide: getRepositoryToken(Reminder),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ReminderService>(ReminderService);
    repo = module.get<Repository<Reminder>>(getRepositoryToken(Reminder));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a reminder', async () => {
    const reminderData = { message: 'Test', remindAt: new Date() };
    const reminder = { 
      id: 1,
      message: 'Test',
      remindAt: new Date(),
      event: null,
      user: null
    };
    jest.spyOn(repo, 'save').mockResolvedValue(reminder);
    expect(await service.create(reminderData)).toEqual(reminder);
  });

  it('should remove a reminder', async () => {
    jest.spyOn(repo, 'delete').mockResolvedValue({ affected: 1 } as any);
    expect(await service.remove(1)).toEqual({ affected: 1 });
  });
});
