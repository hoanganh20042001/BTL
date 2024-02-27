import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class updateUserDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  UserId: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  fullName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  password: string;

}
