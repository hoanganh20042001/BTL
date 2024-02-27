import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewsController } from './news.controller';
import { NewsRepository } from './news.repository';
import { NewsService } from './news.service';
import { LikeRepository } from './like.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    NewsRepository, LikeRepository                                     
  ])],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule { }
