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
exports.Pay = void 0;
const typeorm_1 = require("typeorm");
let Pay = class Pay extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pay.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'accountNumber', nullable: true }),
    __metadata("design:type", String)
], Pay.prototype, "accountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date', nullable: true }),
    __metadata("design:type", Date)
], Pay.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cost', nullable: true }),
    __metadata("design:type", Number)
], Pay.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', nullable: true }),
    __metadata("design:type", String)
], Pay.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bankName', nullable: true }),
    __metadata("design:type", String)
], Pay.prototype, "bankName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", Date)
], Pay.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", Date)
], Pay.prototype, "updatedAt", void 0);
Pay = __decorate([
    (0, typeorm_1.Entity)('pay')
], Pay);
exports.Pay = Pay;
//# sourceMappingURL=pay.entity.js.map