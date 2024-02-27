"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const review_repository_1 = require("./review.repository");
let ReviewService = class ReviewService {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async createReview(input) {
        try {
            const newReview = this.reviewRepository.create(input);
            return await newReview.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listReviewByProductId(payload) {
        const { search, productId } = payload;
        const listReview = this.reviewRepository
            .createQueryBuilder('r')
            .select('r.*')
            .leftJoin('product', 'p', 'p.id=r.productId')
            .leftJoin('user', 'u', 'u.id=r.userId')
            .where('r.productId = :productId', { productId: payload.productId })
            .orderBy('r.conDate', 'ASC');
        if (search) {
            listReview.andWhere('( r.content LIKE :search OR u.fullName LIKE :search OR p.name LIKE :search  )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listReview.getRawMany(),
                listReview.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailReview(payload) {
        const { ReviewId } = payload;
        const Review = await this.reviewRepository.findOne(ReviewId);
        return Review;
    }
    async updateReview(payload) {
        const findReviewById = await this.reviewRepository.findOne(payload.ReviewId);
        if (!findReviewById) {
            throw new common_1.BadRequestException("Review_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findReviewById), payload);
        return await this.reviewRepository.save(updatedItem);
    }
    async deleteReview(payload) {
        const { ReviewId } = payload;
        const Review = await this.reviewRepository.findOne(ReviewId);
        if (!Review) {
            throw new common_1.BadRequestException("Review_is_not_exist");
        }
        await this.reviewRepository.remove(Review);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [review_repository_1.ReviewRepository])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map