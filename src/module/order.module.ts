import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from 'src/dao/order.repository';
import { OrderService } from 'src/business/order.service';
import { OrderController } from 'src/service /order.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    OrderRepository
  ])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule { }
