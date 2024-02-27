import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createCartDto {

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  productId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  userId: number;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  date: Date;
}

export class updateCartDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  CartId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  quantity: number;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  date: Date;
}
