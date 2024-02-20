import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SaveTokenDto {
  @IsNotEmpty()
  @IsString()
  userId: number;

  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsString()
  expired: string;
}
