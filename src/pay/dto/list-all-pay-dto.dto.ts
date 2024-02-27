import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from "class-validator";
import { orderItemDto } from "./pay-dto.dto";

export class listAllPayDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search: string;
}

export class listPayByStatusDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  status: string;
}
export class getDetailPayDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  PayId: number;
}
export class listPayByUserIdDto {
  @ApiProperty({ required: true })
  @IsNumber()
  @IsOptional()
  userId: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search: string;
}

export class getCostDto {

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  discountId: number;

  @ApiProperty({ type: [orderItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  orderItems: orderItemDto[];
}

