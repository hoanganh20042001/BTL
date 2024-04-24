import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandRepository } from 'src/dao/brand.repository';
import { BrandService } from 'src/business/brand.service';
import { BrandController } from 'src/service /brand.controller';


@Module({
  imports: [TypeOrmModule.forFeature([
    BrandRepository
  ])],
  controllers: [BrandController],
  providers: [BrandService]
})
export class BrandModule { }
