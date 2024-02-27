import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class listAllCartDto {

  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  userId: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search: string;
}
export class getDetailCartDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  CartId: number;
}
