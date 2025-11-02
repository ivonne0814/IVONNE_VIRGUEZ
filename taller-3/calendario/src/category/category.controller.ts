import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

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
