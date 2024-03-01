import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/dao/user.repository';
import { UserService } from 'src/business/user.service';
import { UserController } from 'src/service /user.controller';


@Module({
  imports: [TypeOrmModule.forFeature([
    UserRepository
  ])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
