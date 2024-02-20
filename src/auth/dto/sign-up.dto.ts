import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
export class SignupDto {

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  passWord: string;

  @ApiProperty({ required: true })
  @IsString()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ default: 2 })
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  roleId: number;
}
