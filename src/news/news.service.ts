import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailNewsDto,listAllNewsDto } from './dto/list-all-news-dto.dto';
import { createNewsDto, updateNewsDto } from './dto/news-dto.dto';
import { NewsRepository } from './news.repository';

@Injectable()
export class NewsService {
  constructor(
    private readonly newsRepository: NewsRepository
  ) { }
  async createNews(input: createNewsDto) {
    try {
      const newNews = this.newsRepository.create(input);
      return await newNews.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllNews(payload: listAllNewsDto) {
    const { search, limit, page } = payload;
    const listNews = this.newsRepository
      .createQueryBuilder('b')
      .select('b.*')
      .orderBy('b.id', 'ASC')
      .limit(limit)
      .offset(limit * (page - 1));
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listNews.andWhere(
        '( b.name LIKE :search OR b.description LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listNews.getRawMany(),
        listNews.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailNews(payload: getDetailNewsDto) {
    const { NewsId } = payload;
    const News = await this.newsRepository.findOne(NewsId);
    return News;

  }

  async updateNews(payload: updateNewsDto) {

    const findNewsById = await this.newsRepository.findOne(payload.newsId);
    if (!findNewsById) {
      throw new BadRequestException("News_is_not_exist");
    }
    const updatedItem = { ...findNewsById, ...payload };
    return await this.newsRepository.save(updatedItem);
  }

  async deleteNews(payload: getDetailNewsDto) {
    const { NewsId } = payload;
    const News = await this.newsRepository.findOne(NewsId);
    if (!News) {
      throw new BadRequestException("News_is_not_exist");
    }
    await this.newsRepository.remove(News);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
