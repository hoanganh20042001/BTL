import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/dao/category.repository';
import { CategoryService } from 'src/business/category.service';
import { CategoryController } from 'src/service /category.controller';


@Module({
  imports: [TypeOrmModule.forFeature([
    CategoryRepository
  ])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule { }
