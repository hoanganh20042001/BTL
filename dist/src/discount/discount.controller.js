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
exports.DiscountController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/guards/auth.guard");
const list_all_discount_dto_dto_1 = require("./dto/list-all-discount-dto.dto");
const discount_dto_dto_1 = require("./dto/discount-dto.dto");
const discount_service_1 = require("./discount.service");
let DiscountController = class DiscountController {
    constructor(DiscountService) {
        this.DiscountService = DiscountService;
    }
    async createDiscount(payload) {
        return this.DiscountService.createDiscount(payload);
    }
    async listAllDiscount(payload) {
        return this.DiscountService.listAllDiscount(payload);
    }
    async getDetailDiscount(payload) {
        return this.DiscountService.getDetailDiscount(payload);
    }
    async updateDiscount(payload) {
        return await this.DiscountService.updateDiscount(payload);
    }
    async deleteDiscount(payload) {
        return this.DiscountService.deleteDiscount(payload);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discount_dto_dto_1.createDiscountDto]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "createDiscount", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('list-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_discount_dto_dto_1.listAllDiscountDto]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "listAllDiscount", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_discount_dto_dto_1.getDetailDiscountDto]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "getDetailDiscount", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discount_dto_dto_1.updateDiscountDto]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "updateDiscount", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_discount_dto_dto_1.getDetailDiscountDto]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "deleteDiscount", null);
DiscountController = __decorate([
    (0, swagger_1.ApiTags)('discount'),
    (0, common_1.Controller)('discount'),
    __metadata("design:paramtypes", [discount_service_1.DiscountService])
], DiscountController);
exports.DiscountController = DiscountController;
//# sourceMappingURL=discount.controller.js.map