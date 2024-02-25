import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createPayDto {

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  accountNumber: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  date: Date;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  bankName: string;
}

export class updatePayDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  PayId: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  accountNumber: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  bankName: string;
}

export class updateStatusPayDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  PayId: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  status: string;
}
