import { Injectable } from '@nestjs/common';
import { Order } from 'src/databases/entities/order.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Order)
export class OrderRepository extends Repository<Order> { }
