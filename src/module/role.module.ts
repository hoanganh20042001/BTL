import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleController } from '../service /role.controller';
import { RoleRepository } from '../dao/role.repository';
import { RoleService } from '../business/role.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    RoleRepository
  ])],
  controllers: [RoleController],
  providers: [RoleService]
})
export class RoleModule { }
