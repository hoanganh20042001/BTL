import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createReviewDto {

  @ApiProperty()
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  condate: Date;

  @ApiProperty({default:5})
  @IsNumber()
  @IsOptional()
  value: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  productId: number;


  @ApiProperty()
  @IsNumber()
  @IsOptional()
  userId: number;
}

export class updateReviewDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  ReviewId: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  condate: Date;

  @ApiProperty({default:5})
  @IsNumber()
  @IsOptional()
  value: number;
}
