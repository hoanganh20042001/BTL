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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const brand_repository_1 = require("../dao/brand.repository");
let BrandService = class BrandService {
    constructor(brandRepository) {
        this.brandRepository = brandRepository;
    }
    async createBrand(input) {
        try {
            const newBrand = this.brandRepository.create(input);
            return await newBrand.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllBrand(payload) {
        const { search, limit, page } = payload;
        const listBrand = this.brandRepository
            .createQueryBuilder('b')
            .select('b.*')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listBrand.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listBrand.getRawMany(),
                listBrand.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailBrand(payload) {
        const { brandId } = payload;
        const Brand = await this.brandRepository.findOne(brandId);
        return Brand;
    }
    async updateBrand(payload) {
        const findBrandById = await this.brandRepository.findOne(payload.BrandId);
        if (!findBrandById) {
            throw new common_1.BadRequestException("Brand_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findBrandById), payload);
        return await this.brandRepository.save(updatedItem);
    }
    async deleteBrand(payload) {
        const { brandId } = payload;
        const Brand = await this.brandRepository.findOne(brandId);
        if (!Brand) {
            throw new common_1.BadRequestException("Brand_is_not_exist");
        }
        await this.brandRepository.remove(Brand);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [brand_repository_1.BrandRepository])
], BrandService);
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map