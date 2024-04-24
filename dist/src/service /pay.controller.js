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
exports.PayController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const list_all_pay_dto_dto_1 = require("../dto/pay/list-all-pay-dto.dto");
const pay_dto_dto_1 = require("../dto/pay/pay-dto.dto");
const pay_service_1 = require("../business/pay.service");
let PayController = class PayController {
    constructor(payService) {
        this.payService = payService;
    }
    async createPay(payload) {
        return this.payService.createPay(payload);
    }
    async listAllPay(payload) {
        return this.payService.listAllPay(payload);
    }
    async listPayByUserId(payload) {
        return this.payService.listPayByUserId(payload);
    }
    async getCost(payload) {
        return this.payService.getCost(payload);
    }
    async listPayByStatus(payload) {
        return this.payService.listPayByStatus(payload);
    }
    async getDetailPay(payload) {
        return this.payService.getDetailPay(payload);
    }
    async updatePay(payload) {
        return await this.payService.updatePay(payload);
    }
    async updateStatusPay(payload) {
        return await this.payService.updateStatusPay(payload);
    }
    async deletePay(payload) {
        return this.payService.deletePay(payload);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pay_dto_dto_1.createPayDto]),
    __metadata("design:returntype", Promise)
], PayController.prototype, "createPay", null);
__decorate([
    (0, common_1.Get)('list-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_pay_dto_dto_1.listAllPayDto]),
    __metadata("design:returntype", Promise)
], PayController.prototype, "listAllPay", null);
__decorate([
    (0, common_1.Get)('list-by-userId'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_pay_dto_dto_1.listPayByUserIdDto]),
    __metadata("design:returntype", Promise)
], PayController.prototype, "listPayByUserId", null);
__decorate([
    (0, common_1.Get)('cost'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_pay_dto_dto_1.getCostDto]),
    __metadata("design:returntype", Promise)
], PayController.prototype, "getCost", null);
__decorate([
    (0, common_1.Get)('list-by-status'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_pay_dto_dto_1.listPayByStatusDto]),
    __metadata("design:returntype", Promise)
], PayController.prototype, "listPayByStatus", null);
__decorate([
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_pay_dto_dto_1.getDetailPayDto]),
    __metadata("design:returntype", Promise)
], PayController.prototype, "getDetailPay", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pay_dto_dto_1.updatePayDto]),
    __metadata("design:returntype", Promise)
], PayController.prototype, "updatePay", null);
__decorate([
    (0, common_1.Post)('update-status'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pay_dto_dto_1.updateStatusPayDto]),
    __metadata("design:returntype", Promise)
], PayController.prototype, "updateStatusPay", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_pay_dto_dto_1.getDetailPayDto]),
    __metadata("design:returntype", Promise)
], PayController.prototype, "deletePay", null);
PayController = __decorate([
    (0, swagger_1.ApiTags)('pay'),
    (0, common_1.Controller)('pay'),
    __metadata("design:paramtypes", [pay_service_1.PayService])
], PayController);
exports.PayController = PayController;
//# sourceMappingURL=pay.controller.js.map