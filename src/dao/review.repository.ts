import { Injectable } from '@nestjs/common';
import { Review } from 'src/databases/entities/review.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Review)
export class ReviewRepository extends Repository<Review> { }
