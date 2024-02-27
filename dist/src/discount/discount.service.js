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
exports.DiscountService = void 0;
const common_1 = require("@nestjs/common");
const discount_repository_1 = require("./discount.repository");
let DiscountService = class DiscountService {
    constructor(discountRepository) {
        this.discountRepository = discountRepository;
    }
    async createDiscount(input) {
        try {
            const newDiscount = this.discountRepository.create(input);
            return await newDiscount.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllDiscount(payload) {
        const { search, limit, page } = payload;
        const listDiscount = this.discountRepository
            .createQueryBuilder('b')
            .select('b.*')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listDiscount.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listDiscount.getRawMany(),
                listDiscount.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailDiscount(payload) {
        const { DiscountId } = payload;
        const Discount = await this.discountRepository.findOne(DiscountId);
        return Discount;
    }
    async updateDiscount(payload) {
        const findDiscountById = await this.discountRepository.findOne(payload.DiscountId);
        if (!findDiscountById) {
            throw new common_1.BadRequestException("Discount_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findDiscountById), payload);
        return await this.discountRepository.save(updatedItem);
    }
    async deleteDiscount(payload) {
        const { DiscountId } = payload;
        const Discount = await this.discountRepository.findOne(DiscountId);
        if (!Discount) {
            throw new common_1.BadRequestException("Discount_is_not_exist");
        }
        await this.discountRepository.remove(Discount);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
DiscountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [discount_repository_1.DiscountRepository])
], DiscountService);
exports.DiscountService = DiscountService;
//# sourceMappingURL=discount.service.js.map