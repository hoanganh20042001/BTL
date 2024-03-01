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
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const list_all_brand_dto_dto_1 = require("../dto/brand/list-all-brand-dto.dto");
const brand_dto_dto_1 = require("../dto/brand/brand-dto.dto");
const brand_service_1 = require("../business/brand.service");
const auth_guard_1 = require("../dto/auth/guards/auth.guard");
let BrandController = class BrandController {
    constructor(BrandService) {
        this.BrandService = BrandService;
    }
    async createBrand(payload) {
        return this.BrandService.createBrand(payload);
    }
    async listAllBrand(payload) {
        return this.BrandService.listAllBrand(payload);
    }
    async getDetailBrand(payload) {
        return this.BrandService.getDetailBrand(payload);
    }
    async updateBrand(payload) {
        return await this.BrandService.updateBrand(payload);
    }
    async deleteBrand(payload) {
        return this.BrandService.deleteBrand(payload);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_dto_1.createBrandDto]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "createBrand", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('list-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_brand_dto_dto_1.listAllBrandDto]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "listAllBrand", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_brand_dto_dto_1.getDetailBrandDto]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getDetailBrand", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_dto_1.updateBrandDto]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "updateBrand", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_brand_dto_dto_1.getDetailBrandDto]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "deleteBrand", null);
BrandController = __decorate([
    (0, swagger_1.ApiTags)('brand'),
    (0, common_1.Controller)('brand'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandController);
exports.BrandController = BrandController;
//# sourceMappingURL=brand.controller.js.map