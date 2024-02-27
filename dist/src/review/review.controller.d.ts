import { getDetailReviewDto, listReviewByProductIdDto } from './dto/list-all-review-dto.dto';
import { createReviewDto, updateReviewDto } from './dto/review-dto.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    createReview(payload: createReviewDto): Promise<import("../databases/entities/review.entity").Review>;
    listReviewByProductId(payload: listReviewByProductIdDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailReview(payload: getDetailReviewDto): Promise<import("../databases/entities/review.entity").Review>;
    updateReview(payload: updateReviewDto): Promise<{
        ReviewId: number;
        content: string;
        condate: Date;
        value: number;
        id: number;
        conDate: Date;
        productId: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/review.entity").Review>;
    deleteReview(payload: getDetailReviewDto): Promise<{
        status: number;
        message: string;
    }>;
}
