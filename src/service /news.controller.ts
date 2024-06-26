import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/dto/auth/guards/auth.guard';

import { getDetailNewsDto, listAllNewsDto } from '../dto/news/list-all-news-dto.dto';
import { addLikeDto, addViewDto, createNewsDto, updateNewsDto } from '../dto/news/news-dto.dto';
import { NewsService } from '../business/news.service';

@ApiTags('news')
@Controller('news')
export class NewsController {
  constructor(
    private readonly NewsService: NewsService
  ) { }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('create')
  async createNews(
    @Body() payload: createNewsDto
  ) {
    return this.NewsService.createNews(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('add-like')
  async addLike(
    @Body() payload: addLikeDto
  ) {
    return this.NewsService.addLike(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('add-view')
  async addView(
    @Body() payload: addViewDto
  ) {
    return this.NewsService.addView(payload);
  }
  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('list-all')
  async listAllNews(@Query() payload: listAllNewsDto) {
    return this.NewsService.listAllNews(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('detail')
  async getDetailNews(@Query() payload: getDetailNewsDto) {
    return this.NewsService.getDetailNews(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('update')
  async updateNews(
    @Body() payload: updateNewsDto
  ) {
    return await this.NewsService.updateNews(
      payload
    );
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('delete')
  async deleteNews(@Query() payload: getDetailNewsDto) {
    return this.NewsService.deleteNews(payload);
  }
}
