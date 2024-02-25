import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { getDetailBrandDto,listAllBrandDto } from './dto/list-all-brand-dto.dto';
import { createBrandDto, updateBrandDto } from './dto/brand-dto.dto';
import { BrandService } from './brand.service';

@ApiTags('brand')
@Controller('brand')
export class BrandController {
  constructor(
    private readonly BrandService: BrandService
  ) { }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('create')
  async createBrand(
    @Body() payload: createBrandDto
  ) {
    return this.BrandService.createBrand(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('list-all')
  async listAllBrand(@Query() payload: listAllBrandDto) {
    return this.BrandService.listAllBrand(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('detail')
  async getDetailBrand(@Query() payload: getDetailBrandDto) {
    return this.BrandService.getDetailBrand(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('update')
  async updateBrand(
    @Body() payload: updateBrandDto
  ) {
    return await this.BrandService.updateBrand(
      payload
    );
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('delete')
  async deleteBrand(@Query() payload: getDetailBrandDto) {
    return this.BrandService.deleteBrand(payload);
  }
}
