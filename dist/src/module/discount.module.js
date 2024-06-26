"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const discount_repository_1 = require("../dao/discount.repository");
const discount_service_1 = require("../business/discount.service");
const discount_controller_1 = require("../service /discount.controller");
let DiscountModule = class DiscountModule {
};
DiscountModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                discount_repository_1.DiscountRepository
            ])],
        controllers: [discount_controller_1.DiscountController],
        providers: [discount_service_1.DiscountService]
    })
], DiscountModule);
exports.DiscountModule = DiscountModule;
//# sourceMappingURL=discount.module.js.map