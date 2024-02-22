import { Injectable } from '@nestjs/common';
import { Product } from 'src/databases/entities/product.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Product)
export class ProductRepository extends Repository<Product> { }
