import { Injectable } from '@nestjs/common';
import { News } from 'src/databases/entities/news.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(News)
export class NewsRepository extends Repository<News> { }
