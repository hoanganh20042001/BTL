import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PayController } from './pay.controller';
import { PayRepository } from './pay.repository';
import { PayService } from './pay.service';
import { OrderRepository } from 'src/order/order.repository';
import { ProductRepository } from 'src/product/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    PayRepository,ProductRepository,OrderRepository
  ])],
  controllers: [PayController],
  providers: [PayService]
})
export class PayModule { }
