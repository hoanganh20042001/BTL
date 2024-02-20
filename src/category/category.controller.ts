import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { getDetailCategoryDto,listAllCategoryDto } from './dto/list-all-category-dto.dto';
import { createCategoryDto, updateCategoryDto } from './dto/category-dto.dto';
import { CategoryService } from './category.service';

@ApiTags('Category')
@Controller('Category')
export class CategoryController {
  constructor(
    private readonly CategoryService: CategoryService
  ) { }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('create')
  async createCategory(
    @Body() payload: createCategoryDto
  ) {
    return this.CategoryService.createCategory(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('list-all')
  async listAllCategory(@Query() payload: listAllCategoryDto) {
    return this.CategoryService.listAllCategory(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Get('detail')
  async getDetailCategory(@Query() payload: getDetailCategoryDto) {
    return this.CategoryService.getDetailCategory(payload);
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('update')
  async updateCategory(
    @Body() payload: updateCategoryDto
  ) {
    return await this.CategoryService.updateCategory(
      payload
    );
  }

  // @UseGuards(AuthenticationGuard)
  // @ApiBearerAuth()
  @Post('delete')
  async deleteCategory(@Query() payload: getDetailCategoryDto) {
    return this.CategoryService.deleteCategory(payload);
  }
}
