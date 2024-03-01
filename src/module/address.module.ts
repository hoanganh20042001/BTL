import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressService } from 'src/business/address.service';
import { AddressRepository } from 'src/dao/address.repository';
import { AddressController } from 'src/service /address.controller';


@Module({
  imports: [TypeOrmModule.forFeature([
    AddressRepository
  ])],
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule { }
