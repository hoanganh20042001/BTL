import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailReviewDto, listReviewByProductIdDto} from './dto/list-all-review-dto.dto';
import { createReviewDto, updateReviewDto } from './dto/review-dto.dto';
import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository: ReviewRepository
  ) { }
  async createReview(input: createReviewDto) {
    try {
      const newReview = this.reviewRepository.create(input);
      return await newReview.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listReviewByProductId(payload: listReviewByProductIdDto) {
    const { search,productId} = payload;
    const listReview = this.reviewRepository
      .createQueryBuilder('r')
      .select('r.*')
      .leftJoin('product','p','p.id=r.productId')
      .leftJoin('user','u','u.id=r.userId')
      .where('r.productId = :productId', { productId: payload.productId })
      .orderBy('r.conDate', 'ASC');

    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listReview.andWhere(
        '( r.content LIKE :search OR u.fullName LIKE :search OR p.name LIKE :search  )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listReview.getRawMany(),
        listReview.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailReview(payload: getDetailReviewDto) {
    const { ReviewId } = payload;
    const Review = await this.reviewRepository.findOne(ReviewId);
    return Review;

  }

  async updateReview(payload: updateReviewDto) {

    const findReviewById = await this.reviewRepository.findOne(payload.ReviewId);
    if (!findReviewById) {
      throw new BadRequestException("Review_is_not_exist");
    }
    const updatedItem = { ...findReviewById, ...payload };
    return await this.reviewRepository.save(updatedItem);
  }

  async deleteReview(payload: getDetailReviewDto) {
    const { ReviewId } = payload;
    const Review = await this.reviewRepository.findOne(ReviewId);
    if (!Review) {
      throw new BadRequestException("Review_is_not_exist");
    }
    await this.reviewRepository.remove(Review);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
