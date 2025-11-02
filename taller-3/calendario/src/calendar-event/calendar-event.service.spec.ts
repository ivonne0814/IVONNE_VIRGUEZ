import { Test, TestingModule } from '@nestjs/testing';
import { CalendarEventService } from './calendar-event.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EventCalendar } from './entities/calendar-event.entity';

describe('EventCalendarService', () => {
  let service: CalendarEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CalendarEventService,
        {
          provide: getRepositoryToken(EventCalendar),
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

    service = module.get<CalendarEventService>(CalendarEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
