import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MinioService } from 'src/minio/minio.service';
import { CategoryRepository } from 'src/dao/category.repository';
import { BrandRepository } from 'src/dao/brand.repository';
import { ProductRepository } from 'src/dao/product.repository';
import { ProductController } from 'src/service /product.controller';
import { ProductService } from 'src/business/product.service';
import { TypeRepository } from 'src/dao/type.repository';

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
