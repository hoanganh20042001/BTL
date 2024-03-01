import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewRepository } from 'src/dao/review.repository';
import { ReviewService } from 'src/business/review.service';
import { ReviewController } from 'src/service /review.controller';


@Module({
  imports: [TypeOrmModule.forFeature([
    ReviewRepository
  ])],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule { }
