import { ApiProperty } from '@nestjs/swagger';
import {
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength
} from 'class-validator';

export class SigninDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  passWord: string;
}

export class SigninUserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  identity: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  passWord: string;
}

export class forgetPassDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  email: string;
}
