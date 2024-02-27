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
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/guards/auth.guard");
const list_all_address_dto_dto_1 = require("./dto/list-all-address-dto.dto");
const address_dto_dto_1 = require("./dto/address-dto.dto");
const address_service_1 = require("./address.service");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    async createAddress(payload) {
        return this.addressService.createAddress(payload);
    }
    async listAllAddress(payload) {
        return this.addressService.listAllAddress(payload);
    }
    async getDetailAddress(payload) {
        return this.addressService.getDetailAddress(payload);
    }
    async updateAddress(payload) {
        return await this.addressService.updateAddress(payload);
    }
    async deleteAddress(payload) {
        return this.addressService.deleteAddress(payload);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [address_dto_dto_1.createAddressDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "createAddress", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('list-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_address_dto_dto_1.listAllAddressDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "listAllAddress", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_address_dto_dto_1.getDetailAddressDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "getDetailAddress", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [address_dto_dto_1.updateAddressDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "updateAddress", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_address_dto_dto_1.getDetailAddressDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "deleteAddress", null);
AddressController = __decorate([
    (0, swagger_1.ApiTags)('Address'),
    (0, common_1.Controller)('Address'),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], AddressController);
exports.AddressController = AddressController;
//# sourceMappingURL=address.controller.js.map