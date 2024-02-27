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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const list_all_cart_dto_dto_1 = require("./dto/list-all-cart-dto.dto");
const cart_dto_dto_1 = require("./dto/cart-dto.dto");
const cart_service_1 = require("./cart.service");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async createCart(payload) {
        return this.cartService.createCart(payload);
    }
    async listAllCart(payload) {
        return this.cartService.listAllCartByUserId(payload);
    }
    async getDetailCart(payload) {
        return this.cartService.getDetailCart(payload);
    }
    async updateCart(payload) {
        return await this.cartService.updateCart(payload);
    }
    async deleteCart(payload) {
        return this.cartService.deleteCart(payload);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_dto_dto_1.createCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "createCart", null);
__decorate([
    (0, common_1.Get)('list-by-userId'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_cart_dto_dto_1.listAllCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "listAllCart", null);
__decorate([
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_cart_dto_dto_1.getDetailCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getDetailCart", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_dto_dto_1.updateCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateCart", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_cart_dto_dto_1.getDetailCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteCart", null);
CartController = __decorate([
    (0, swagger_1.ApiTags)('cart'),
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map