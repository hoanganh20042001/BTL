import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class listReviewByProductIdDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  productId: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search: string;
}
export class getDetailReviewDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  ReviewId: number;
}
