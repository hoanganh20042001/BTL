import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createNewsDto {

  @ApiProperty()
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  newDate: Date;

  @ApiProperty({default:0})
  @IsNumber()
  @IsOptional()
  view:number;

  @ApiProperty({default:0})
  @IsNumber()
  @IsOptional()
  liked:number;

  // @ApiProperty()
  // @IsNumber()
  // @IsOptional()
  // userId:number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  content: string;
}

export class updateNewsDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  newsId: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  newDate: Date;

  // @ApiProperty({default:0})
  // @IsNumber()
  // @IsOptional()
  // view:Number;

  // @ApiProperty({default:0})
  // @IsNumber()
  // @IsOptional()
  // liked:Number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  content: string;
}
