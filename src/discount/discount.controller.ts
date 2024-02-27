import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { getDetailDiscountDto,listAllDiscountDto } from './dto/list-all-discount-dto.dto';
import { createDiscountDto, updateDiscountDto } from './dto/discount-dto.dto';
import { DiscountService } from './discount.service';

@ApiTags('discount')
@Controller('discount')
export class DiscountController {
  constructor(
    private readonly DiscountService: DiscountService
  ) { }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('create')
  async createDiscount(
    @Body() payload: createDiscountDto
  ) {
    return this.DiscountService.createDiscount(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('list-all')
  async listAllDiscount(@Query() payload: listAllDiscountDto) {
    return this.DiscountService.listAllDiscount(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('detail')
  async getDetailDiscount(@Query() payload: getDetailDiscountDto) {
    return this.DiscountService.getDetailDiscount(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('update')
  async updateDiscount(
    @Body() payload: updateDiscountDto
  ) {
    return await this.DiscountService.updateDiscount(
      payload
    );
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('delete')
  async deleteDiscount(@Query() payload: getDetailDiscountDto) {
    return this.DiscountService.deleteDiscount(payload);
  }
}
