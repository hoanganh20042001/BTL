import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartController } from './cart.controller';
import { CartRepository } from './cart.repository';
import { CartService } from './cart.service';
import { ProductRepository } from 'src/product/product.repository';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    CartRepository, ProductRepository,UserRepository
  ])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule { }
