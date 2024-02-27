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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/guards/auth.guard");
const list_all_order_dto_dto_1 = require("./dto/list-all-order-dto.dto");
const order_dto_dto_1 = require("./dto/order-dto.dto");
const order_service_1 = require("./order.service");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async createOrder(payload) {
        return this.orderService.createOrder(payload);
    }
    async listAllOrder(payload) {
        return this.orderService.listAllOrder(payload);
    }
    async getDetailOrder(payload) {
        return this.orderService.getDetailOrder(payload);
    }
    async updateOrder(payload) {
        return await this.orderService.updateOrder(payload);
    }
    async pay(payload) {
        return await this.orderService.pay(payload);
    }
    async deleteOrder(payload) {
        return this.orderService.deleteOrder(payload);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_dto_1.createOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('list-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_order_dto_dto_1.listAllOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "listAllOrder", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_order_dto_dto_1.getDetailOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getDetailOrder", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_dto_1.updateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrder", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('pay'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_dto_1.payInOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "pay", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_order_dto_dto_1.getDetailOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteOrder", null);
OrderController = __decorate([
    (0, swagger_1.ApiTags)('order'),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map