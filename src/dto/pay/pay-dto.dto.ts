import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export class orderItemDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  orderId: number;

}
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

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  discountId: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  userId: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  status: string;

  @ApiProperty({ type: [orderItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  orderItems: orderItemDto[];
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
