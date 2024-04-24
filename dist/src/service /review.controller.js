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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../dto/auth/guards/auth.guard");
const list_all_review_dto_dto_1 = require("../dto/review/list-all-review-dto.dto");
const review_dto_dto_1 = require("../dto/review/review-dto.dto");
const review_service_1 = require("../business/review.service");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    async createReview(payload) {
        return this.reviewService.createReview(payload);
    }
    async listReviewByProductId(payload) {
        return this.reviewService.listReviewByProductId(payload);
    }
    async getDetailReview(payload) {
        return this.reviewService.getDetailReview(payload);
    }
    async updateReview(payload) {
        return await this.reviewService.updateReview(payload);
    }
    async deleteReview(payload) {
        return this.reviewService.deleteReview(payload);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_dto_1.createReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "createReview", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('list-by-productId'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_review_dto_dto_1.listReviewByProductIdDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "listReviewByProductId", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_review_dto_dto_1.getDetailReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getDetailReview", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_dto_1.updateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "updateReview", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_review_dto_dto_1.getDetailReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "deleteReview", null);
ReviewController = __decorate([
    (0, swagger_1.ApiTags)('Review'),
    (0, common_1.Controller)('Review'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map