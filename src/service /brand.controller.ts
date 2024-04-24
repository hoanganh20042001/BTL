import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


import { getDetailBrandDto, listAllBrandDto } from '../dto/brand/list-all-brand-dto.dto';
import { createBrandDto, updateBrandDto } from '../dto/brand/brand-dto.dto';
import { BrandService } from '../business/brand.service';
import { AuthenticationGuard } from 'src/dto/auth/guards/auth.guard';

@ApiTags('brand')
@Controller('brand')
export class BrandController {
  constructor(
    private readonly BrandService: BrandService
  ) { }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('create')
  async createBrand(
    @Body() payload: createBrandDto
  ) {
    return this.BrandService.createBrand(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('list-all')
  async listAllBrand(@Query() payload: listAllBrandDto) {
    return this.BrandService.listAllBrand(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('detail')
  async getDetailBrand(@Query() payload: getDetailBrandDto) {
    return this.BrandService.getDetailBrand(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('update')
  async updateBrand(
    @Body() payload: updateBrandDto
  ) {
    return await this.BrandService.updateBrand(
      payload
    );
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('delete')
  async deleteBrand(@Query() payload: getDetailBrandDto) {
    return this.BrandService.deleteBrand(payload);
  }
}
