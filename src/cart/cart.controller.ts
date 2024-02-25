import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { getDetailCartDto,listAllCartDto } from './dto/list-all-cart-dto.dto';
import { createCartDto, updateCartDto } from './dto/cart-dto.dto';
import { CartService } from './cart.service';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(
    private readonly cartService: CartService
  ) { }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('create')
  async createCart(
    @Body() payload: createCartDto
  ) {
    return this.cartService.createCart(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('list-all')
  async listAllCart(@Query() payload: listAllCartDto) {
    return this.cartService.listAllCart(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('detail')
  async getDetailCart(@Query() payload: getDetailCartDto) {
    return this.cartService.getDetailCart(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('update')
  async updateCart(
    @Body() payload: updateCartDto
  ) {
    return await this.cartService.updateCart(
      payload
    );
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('delete')
  async deleteCart(@Query() payload: getDetailCartDto) {
    return this.cartService.deleteCart(payload);
  }
}
