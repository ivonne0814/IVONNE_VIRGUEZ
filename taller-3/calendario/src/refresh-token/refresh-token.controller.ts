import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RefreshTokenService } from './refresh-token.service';

@Controller('refresh-token')
export class RefreshTokenController {
  constructor(private readonly refreshTokenService: RefreshTokenService) {}

  @Post()
  create(@Body() data: any) {
    return this.refreshTokenService.create(data);
  }

  @Get()
  findAll() {
    return this.refreshTokenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.refreshTokenService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.refreshTokenService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.refreshTokenService.remove(id);
  }
}
