import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PayController } from './pay.controller';
import { PayRepository } from './pay.repository';
import { PayService } from './pay.service';
import { OrderRepository } from 'src/order/order.repository';
import { ProductRepository } from 'src/product/product.repository';
import { DiscountRepository } from 'src/discount/discount.repository';
import { MailService } from 'src/mail/mail.service';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    PayRepository,ProductRepository,OrderRepository,DiscountRepository,UserRepository,
  ])],
  controllers: [PayController],
  providers: [PayService,MailService]
})
export class PayModule { }
