import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class listAllOrderDto {
  // @ApiProperty({ default: 1, required: true })
  // @Type(() => Number)
  // @IsOptional()
  // @IsNumber()
  // @Min(1)
  // page: number;

  // @ApiProperty({ default: 10, required: true })
  // @Type(() => Number)
  // @IsOptional()
  // @IsNumber()
  // @Min(1)
  // limit: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search: string;
}
export class getDetailOrderDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  OrderId: number;
}
