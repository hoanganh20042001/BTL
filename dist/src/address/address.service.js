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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const address_repository_1 = require("./address.repository");
let AddressService = class AddressService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async createAddress(input) {
        try {
            const newAddress = this.addressRepository.create(input);
            return await newAddress.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllAddress(payload) {
        const { search, limit, page } = payload;
        const listAddress = this.addressRepository
            .createQueryBuilder('b')
            .select('b.*')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listAddress.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listAddress.getRawMany(),
                listAddress.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailAddress(payload) {
        const { AddressId } = payload;
        const Address = await this.addressRepository.findOne(AddressId);
        return Address;
    }
    async updateAddress(payload) {
        const findAddressById = await this.addressRepository.findOne(payload.AddressId);
        if (!findAddressById) {
            throw new common_1.BadRequestException("Address_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findAddressById), payload);
        return await this.addressRepository.save(updatedItem);
    }
    async deleteAddress(payload) {
        const { AddressId } = payload;
        const Address = await this.addressRepository.findOne(AddressId);
        if (!Address) {
            throw new common_1.BadRequestException("Address_is_not_exist");
        }
        await this.addressRepository.remove(Address);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
AddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [address_repository_1.AddressRepository])
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map