import { Test, TestingModule } from '@nestjs/testing';
import { CalendarEventController } from './calendar-event.controller';
import { CalendarEventService } from './calendar-event.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EventCalendar  } from './entities/calendar-event.entity';
import { Repository } from 'typeorm';

describe('CalendarEventController', () => {
  let controller: CalendarEventController;
  let service: CalendarEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarEventController],
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

    controller = module.get<CalendarEventController>(CalendarEventController);
    service = module.get<CalendarEventService>(CalendarEventService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service.findAll when getAll is called', async () => {
    const mockEvents = [{ id: 1, title: 'Meeting' }];
    jest.spyOn(service, 'findAll').mockResolvedValue(mockEvents as any);

    const result = await controller.findAll();
    expect(result).toEqual(mockEvents);
    expect(service.findAll).toHaveBeenCalled();
  });
});

