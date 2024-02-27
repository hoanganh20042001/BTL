import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeController } from './type.controller';
import { TypeRepository } from './type.repository';
import { TypeService } from './type.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    TypeRepository
  ])],
  controllers: [TypeController],
  providers: [TypeService]
})
export class TypeModule { }
