import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/dto/auth/guards/auth.guard';

import { getDetailRoleDto, listAllRoleDto } from '../dto/role/list-all-role-dto.dto';
import { createRoleDto, updateRoleDto } from '../dto/role/role-dto.dto';
import { RoleService } from '../business/role.service';

@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(
    private readonly roleService: RoleService
  ) { }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('create')
  async createRole(
    @Body() payload: createRoleDto
  ) {
    return this.roleService.createRole(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('list-all')
  async listAllRole(@Query() payload: listAllRoleDto) {
    return this.roleService.listAllRole(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('detail')
  async getDetailRole(@Query() payload: getDetailRoleDto) {
    return this.roleService.getDetailRole(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('update')
  async updateRole(
    @Body() payload: updateRoleDto
  ) {
    return await this.roleService.updateRole(
      payload
    );
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('delete')
  async deleteRole(@Query() payload: getDetailRoleDto) {
    return this.roleService.deleteRole(payload);
  }
}
