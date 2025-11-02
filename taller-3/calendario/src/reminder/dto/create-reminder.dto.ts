import { IsString, IsDateString, IsOptional, IsInt } from 'class-validator';

export class CreateReminderDto {
  @IsString()
  title: string;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsInt()
  userId?: number;
}