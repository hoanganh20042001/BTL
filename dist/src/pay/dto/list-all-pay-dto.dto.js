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
exports.getCostDto = exports.listPayByUserIdDto = exports.getDetailPayDto = exports.listPayByStatusDto = exports.listAllPayDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const pay_dto_dto_1 = require("./pay-dto.dto");
class listAllPayDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], listAllPayDto.prototype, "search", void 0);
exports.listAllPayDto = listAllPayDto;
class listPayByStatusDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], listPayByStatusDto.prototype, "status", void 0);
exports.listPayByStatusDto = listPayByStatusDto;
class getDetailPayDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], getDetailPayDto.prototype, "PayId", void 0);
exports.getDetailPayDto = getDetailPayDto;
class listPayByUserIdDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], listPayByUserIdDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], listPayByUserIdDto.prototype, "search", void 0);
exports.listPayByUserIdDto = listPayByUserIdDto;
class getCostDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], getCostDto.prototype, "discountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [pay_dto_dto_1.orderItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], getCostDto.prototype, "orderItems", void 0);
exports.getCostDto = getCostDto;
//# sourceMappingURL=list-all-pay-dto.dto.js.map