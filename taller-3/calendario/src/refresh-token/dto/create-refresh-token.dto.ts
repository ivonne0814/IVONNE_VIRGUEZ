import { IsString, IsInt, IsDateString } from 'class-validator';

export class CreateRefreshTokenDto {
  @IsString()
  token: string;

  @IsInt()
  userId: number;

  @IsDateString()
  expiresAt: string;
}
