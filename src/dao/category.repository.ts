import { Injectable } from '@nestjs/common';
import { Category } from 'src/databases/entities/category.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> { }
