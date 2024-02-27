import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { getDetailOrderDto,listAllOrderDto } from './dto/list-all-order-dto.dto';
import { createOrderDto, payInOrderDto, updateOrderDto } from './dto/order-dto.dto';
import { OrderService } from './order.service';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService
  ) { }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('create')
  async createOrder(
    @Body() payload: createOrderDto
  ) {
    return this.orderService.createOrder(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('list-all')
  async listAllOrder(@Query() payload: listAllOrderDto) {
    return this.orderService.listAllOrder(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('detail')
  async getDetailOrder(@Query() payload: getDetailOrderDto) {
    return this.orderService.getDetailOrder(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('update')
  async updateOrder(
    @Body() payload: updateOrderDto
  ) {
    return await this.orderService.updateOrder(
      payload
    );
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('pay')
  async pay(
    @Body() payload: payInOrderDto
  ) {
    return await this.orderService.pay(
      payload
    );
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('delete')
  async deleteOrder(@Query() payload: getDetailOrderDto) {
    return this.orderService.deleteOrder(payload);
  }
}
