import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createAddressDto {

  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  note: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsOptional()
  userId: number;
}

export class updateAddressDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  AddressId: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  note: string;

}
