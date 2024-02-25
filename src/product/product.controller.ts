import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { filterProductDto, getDetailProductDto,listAllProductDto } from './dto/list-all-product-dto.dto';
import { createProductDto, updateProductDto } from './dto/product-dto.dto';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly ProductService: ProductService
  ) { }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('create')
  async createProduct(
    @Body() payload: createProductDto
  ) {
    return this.ProductService.createProduct(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('list-all')
  async listAllProduct(@Query() payload: listAllProductDto) {
    return this.ProductService.listAllProduct(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('detail')
  async getDetailProduct(@Query() payload: getDetailProductDto) {
    return this.ProductService.getDetailProduct(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('update')
  async updateProduct(
    @Body() payload: updateProductDto
  ) {
    return await this.ProductService.updateProduct(
      payload
    );
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('delete')
  async deleteProduct(@Query() payload: getDetailProductDto) {
    return this.ProductService.deleteProduct(payload);
  }

   // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('filter')
  async filterProduct(@Query() payload: filterProductDto) {
    return this.ProductService.filterProduct(payload);
  }
}
