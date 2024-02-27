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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
let Product = class Product extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image', nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'discount', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'discountedPrice', default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "discountedPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'categoryId', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'typeId', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'brandId', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "brandId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quantity', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'price', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sold', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "sold", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date', nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', default: 'AVAILABLE' }),
    __metadata("design:type", String)
], Product.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)('product')
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map