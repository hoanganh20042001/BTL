import { Injectable } from '@nestjs/common';
import { Cart } from 'src/databases/entities/cart.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> { }
