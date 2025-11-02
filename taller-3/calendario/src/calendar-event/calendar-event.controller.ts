import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CalendarEventService } from './calendar-event.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('calendar-events')
export class CalendarEventController {
  constructor(private readonly service: CalendarEventService) {}

  @Post() create(@Body() data: any) {
    return this.service.create(data);
  }

  @Get() findAll() {
    return this.service.findAll();
  }

  @Get(':id') findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id') update(@Param('id') id: number, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(':id') remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
