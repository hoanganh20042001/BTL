import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountRepository } from 'src/dao/discount.repository';
import { OrderRepository } from 'src/dao/order.repository';
import { PayRepository } from 'src/dao/pay.repository';
import { ProductRepository } from 'src/dao/product.repository';
import { UserRepository } from 'src/dao/user.repository';
import { PayService } from 'src/business/pay.service';


import { MailService } from 'src/mail/mail.service';
import { PayController } from 'src/service /pay.controller';


@Module({
  imports: [TypeOrmModule.forFeature([
    PayRepository, ProductRepository, OrderRepository, DiscountRepository, UserRepository,
  ])],
  controllers: [PayController],
  providers: [PayService, MailService]
})
export class PayModule { }
