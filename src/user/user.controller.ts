import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { getDetailUserDto,listAllUserDto } from './dto/list-all-user-dto.dto';
import {  updateUserDto } from './dto/user-dto.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  // @Post('create')
  // async createUser(
  //   @Body() payload: createUserDto
  // ) {
  //   return this.userService.createUser(payload);
  // }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('list-all-client')
  async listAllUser(@Query() payload: listAllUserDto) {
    return this.userService.listAllClient(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('detail')
  async getDetailUser(@Query() payload: getDetailUserDto) {
    return this.userService.getDetailUser(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('update')
  async updateUser(
    @Body() payload: updateUserDto
  ) {
    return await this.userService.updateUser(
      payload
    );
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  // @Post('delete')
  // async deleteUser(@Query() payload: getDetailUserDto) {
  //   return this.userService.deleteUser(payload);
  // }
}
