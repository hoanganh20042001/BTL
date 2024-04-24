import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeRepository } from 'src/dao/type.repository';
import { TypeService } from 'src/business/type.service';
import { TypeController } from 'src/service /type.controller';



@Module({
  imports: [TypeOrmModule.forFeature([
    TypeRepository
  ])],
  controllers: [TypeController],
  providers: [TypeService]
})
export class TypeModule { }
