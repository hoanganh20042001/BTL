import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { getCostDto, getDetailPayDto,listAllPayDto, listPayByStatusDto, listPayByUserIdDto } from './dto/list-all-pay-dto.dto';
import { createPayDto, updatePayDto, updateStatusPayDto } from './dto/pay-dto.dto';
import { PayService } from './pay.service';

@ApiTags('pay')
@Controller('pay')
export class PayController {
  constructor(
    private readonly payService: PayService
  ) { }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('create')
  async createPay(
    @Body() payload: createPayDto
  ) {
    return this.payService.createPay(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('list-all')
  async listAllPay(@Query() payload: listAllPayDto) {
    return this.payService.listAllPay(payload);
  }


  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('list-by-userId')
  async listPayByUserId(@Query() payload: listPayByUserIdDto) {
    return this.payService.listPayByUserId(payload);
  }

    // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('cost')
  async getCost(@Query() payload: getCostDto) {
    return this.payService.getCost(payload);
  }

    // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('list-by-status')
  async listPayByStatus(@Query() payload: listPayByStatusDto) {
    return this.payService.listPayByStatus(payload);
  }
  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('detail')
  async getDetailPay(@Query() payload: getDetailPayDto) {
    return this.payService.getDetailPay(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('update')
  async updatePay(
    @Body() payload: updatePayDto
  ) {
    return await this.payService.updatePay(
      payload
    );
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('update-status')
  async updateStatusPay(
    @Body() payload: updateStatusPayDto
  ) {
    return await this.payService.updateStatusPay(
      payload
    );
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('delete')
  async deletePay(@Query() payload: getDetailPayDto) {
    return this.payService.deletePay(payload);
  }
}
