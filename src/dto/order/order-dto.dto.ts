import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createOrderDto {

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
}

export class updateOrderDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  OrderId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  quantity: number;

}

export class payInOrderDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  OrderId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  payId: number;

}
