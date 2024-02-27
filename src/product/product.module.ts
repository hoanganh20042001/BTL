import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';
import { BrandRepository } from 'src/brand/brand.repository';
import { CategoryRepository } from 'src/category/category.repository';
import { TypeRepository } from 'src/type/type.repository';
import { MinioService } from 'src/minio/minio.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    ProductRepository,
    BrandRepository,
    TypeRepository,
    CategoryRepository,
  ])],
  controllers: [ProductController],
  providers: [ProductService,
    MinioService,
  ]
})
export class ProductModule { }
