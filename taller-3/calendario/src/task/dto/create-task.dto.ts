import { IsString, IsOptional, IsBoolean, IsInt, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsInt()
  categoryId?: number;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}
export class UpdateTaskDto extends CreateTaskDto {}
