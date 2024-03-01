import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/dto/auth/guards/auth.guard';

import { getDetailReviewDto, listReviewByProductIdDto } from '../dto/review/list-all-review-dto.dto';
import { createReviewDto, updateReviewDto } from '../dto/review/review-dto.dto';
import { ReviewService } from '../business/review.service';

@ApiTags('Review')
@Controller('Review')
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService
  ) { }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('create')
  async createReview(
    @Body() payload: createReviewDto
  ) {
    return this.reviewService.createReview(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('list-by-productId')
  async listReviewByProductId(@Query() payload: listReviewByProductIdDto) {
    return this.reviewService.listReviewByProductId(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('detail')
  async getDetailReview(@Query() payload: getDetailReviewDto) {
    return this.reviewService.getDetailReview(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('update')
  async updateReview(
    @Body() payload: updateReviewDto
  ) {
    return await this.reviewService.updateReview(
      payload
    );
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('delete')
  async deleteReview(@Query() payload: getDetailReviewDto) {
    return this.reviewService.deleteReview(payload);
  }
}
