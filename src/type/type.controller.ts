import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { getDetailTypeDto,listAllTypeDto } from './dto/list-all-type-dto.dto';
import { createTypeDto, updateTypeDto } from './dto/type-dto.dto';
import { TypeService } from './type.service';

@ApiTags('Type')
@Controller('Type')
export class TypeController {
  constructor(
    private readonly TypeService: TypeService
  ) { }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('create')
  async createType(
    @Body() payload: createTypeDto
  ) {
    return this.TypeService.createType(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('list-all')
  async listAllType(@Query() payload: listAllTypeDto) {
    return this.TypeService.listAllType(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('detail')
  async getDetailType(@Query() payload: getDetailTypeDto) {
    return this.TypeService.getDetailType(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('update')
  async updateType(
    @Body() payload: updateTypeDto
  ) {
    return await this.TypeService.updateType(
      payload
    );
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('delete')
  async deleteType(@Query() payload: getDetailTypeDto) {
    return this.TypeService.deleteType(payload);
  }
}