import { Injectable } from '@nestjs/common';
import { Discount } from 'src/databases/entities/discount.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Discount)
export class DiscountRepository extends Repository<Discount> { }
