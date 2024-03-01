import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeRepository } from 'src/dao/like.repository';
import { NewsRepository } from 'src/dao/news.repository';
import { NewsService } from 'src/business/news.service';
import { NewsController } from 'src/service /news.controller';


@Module({
  imports: [TypeOrmModule.forFeature([
    NewsRepository, LikeRepository
  ])],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule { }
