import { Test, TestingModule } from '@nestjs/testing';
import { ReminderController } from './reminder.controller';
import { ReminderService } from './reminder.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Reminder } from './entities/reminder.entity';

describe('ReminderController', () => {
  let controller: ReminderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReminderController],
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

    controller = module.get<ReminderController>(ReminderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
