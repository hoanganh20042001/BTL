import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountRepository } from 'src/dao/discount.repository';
import { DiscountService } from 'src/business/discount.service';
import { DiscountController } from 'src/service /discount.controller';



@Module({
  imports: [TypeOrmModule.forFeature([
    DiscountRepository
  ])],
  controllers: [DiscountController],
  providers: [DiscountService]
})
export class DiscountModule { }
