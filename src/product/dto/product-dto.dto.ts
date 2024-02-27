import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createProductDto {

  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  discount: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  categoryId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  typeId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  price: number;

  // @ApiProperty({default:'AVAILABLE'})
  // @IsString()
  // @IsOptional()
  // status: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  brandId: number;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  date: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}

export class updateProductDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  ProductId: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  discount: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  categoryId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  typeId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  brandId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  price: number;

  @ApiProperty({default:'AVAILABLE'})
  @IsString()
  @IsOptional()
  status: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  date: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}
export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}


