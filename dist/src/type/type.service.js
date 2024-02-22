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
exports.TypeService = void 0;
const common_1 = require("@nestjs/common");
const type_repository_1 = require("./type.repository");
let TypeService = class TypeService {
    constructor(TypeRepository) {
        this.TypeRepository = TypeRepository;
    }
    async createType(input) {
        try {
            const newType = this.TypeRepository.create(input);
            return await newType.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllType(payload) {
        const { search, limit, page } = payload;
        const listType = this.TypeRepository
            .createQueryBuilder('b')
            .select('b.*')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listType.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listType.getRawMany(),
                listType.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailType(payload) {
        const { TypeId } = payload;
        const Type = await this.TypeRepository.findOne(TypeId);
        return Type;
    }
    async updateType(payload) {
        const findTypeById = await this.TypeRepository.findOne(payload.TypeId);
        if (!findTypeById) {
            throw new common_1.BadRequestException("Type_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findTypeById), payload);
        return await this.TypeRepository.save(updatedItem);
    }
    async deleteType(payload) {
        const { TypeId } = payload;
        const Type = await this.TypeRepository.findOne(TypeId);
        if (!Type) {
            throw new common_1.BadRequestException("Type_is_not_exist");
        }
        await this.TypeRepository.remove(Type);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
TypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_repository_1.TypeRepository])
], TypeService);
exports.TypeService = TypeService;
//# sourceMappingURL=type.service.js.map