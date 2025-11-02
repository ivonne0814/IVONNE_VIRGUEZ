import { IsString, IsDateString, IsOptional, IsInt } from 'class-validator';

export class CreateCalendarEventDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsOptional()
  @IsInt()
  userId?: number;
}
