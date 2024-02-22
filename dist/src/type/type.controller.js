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
exports.TypeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/guards/auth.guard");
const list_all_type_dto_dto_1 = require("./dto/list-all-type-dto.dto");
const type_dto_dto_1 = require("./dto/type-dto.dto");
const type_service_1 = require("./type.service");
let TypeController = class TypeController {
    constructor(TypeService) {
        this.TypeService = TypeService;
    }
    async createType(payload) {
        return this.TypeService.createType(payload);
    }
    async listAllType(payload) {
        return this.TypeService.listAllType(payload);
    }
    async getDetailType(payload) {
        return this.TypeService.getDetailType(payload);
    }
    async updateType(payload) {
        return await this.TypeService.updateType(payload);
    }
    async deleteType(payload) {
        return this.TypeService.deleteType(payload);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_dto_dto_1.createTypeDto]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "createType", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('list-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_type_dto_dto_1.listAllTypeDto]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "listAllType", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_type_dto_dto_1.getDetailTypeDto]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "getDetailType", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_dto_dto_1.updateTypeDto]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "updateType", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_type_dto_dto_1.getDetailTypeDto]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "deleteType", null);
TypeController = __decorate([
    (0, swagger_1.ApiTags)('Type'),
    (0, common_1.Controller)('Type'),
    __metadata("design:paramtypes", [type_service_1.TypeService])
], TypeController);
exports.TypeController = TypeController;
//# sourceMappingURL=type.controller.js.map