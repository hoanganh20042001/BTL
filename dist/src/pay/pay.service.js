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
exports.PayService = void 0;
const common_1 = require("@nestjs/common");
const pay_repository_1 = require("./pay.repository");
let PayService = class PayService {
    constructor(payRepository) {
        this.payRepository = payRepository;
    }
    async createPay(input) {
        try {
            const newPay = this.payRepository.create(input);
            return await newPay.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllPay(payload) {
        const { search, limit, page } = payload;
        const listPay = this.payRepository
            .createQueryBuilder('b')
            .select('b.*')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listPay.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listPay.getRawMany(),
                listPay.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailPay(payload) {
        const { PayId } = payload;
        const Pay = await this.payRepository.findOne(PayId);
        return Pay;
    }
    async updatePay(payload) {
        const findPayById = await this.payRepository.findOne(payload.PayId);
        if (!findPayById) {
            throw new common_1.BadRequestException("Pay_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findPayById), payload);
        return await this.payRepository.save(updatedItem);
    }
    async deletePay(payload) {
        const { PayId } = payload;
        const Pay = await this.payRepository.findOne(PayId);
        if (!Pay) {
            throw new common_1.BadRequestException("Pay_is_not_exist");
        }
        await this.payRepository.remove(Pay);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
PayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pay_repository_1.PayRepository])
], PayService);
exports.PayService = PayService;
//# sourceMappingURL=pay.service.js.map