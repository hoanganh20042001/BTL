import { Injectable } from '@nestjs/common';
import { Brand } from 'src/databases/entities/brand.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Brand)
export class BrandRepository extends Repository<Brand> { }
