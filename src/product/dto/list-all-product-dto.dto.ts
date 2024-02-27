import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class listAllProductDto {
  @ApiProperty({ default: 1, required: true })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(1)
  page: number;

  @ApiProperty({ default: 10, required: true })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search: string;
}
export class getDetailProductDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  ProductId: number;
}
export class filterProductDto {
  // @ApiProperty()
  // @IsNumber()
  // @IsOptional()
  // discount: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  category: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  type: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  brand: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  minPrice: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  maxPrice: number;
}
