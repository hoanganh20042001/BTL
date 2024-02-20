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
exports.saveTokenCodeDto = exports.RefreshTokenInput = exports.UserRefreshTokenClaims = exports.UserAccessTokenClaims = exports.AuthTokenOutput2 = exports.AuthTokenOutput = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AuthTokenOutput {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthTokenOutput.prototype, "accessToken", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthTokenOutput.prototype, "refreshToken", void 0);
exports.AuthTokenOutput = AuthTokenOutput;
class AuthTokenOutput2 {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthTokenOutput2.prototype, "accessToken", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthTokenOutput2.prototype, "refreshToken", void 0);
exports.AuthTokenOutput2 = AuthTokenOutput2;
class UserAccessTokenClaims {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserAccessTokenClaims.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserAccessTokenClaims.prototype, "username", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserAccessTokenClaims.prototype, "role", void 0);
exports.UserAccessTokenClaims = UserAccessTokenClaims;
class UserRefreshTokenClaims {
}
exports.UserRefreshTokenClaims = UserRefreshTokenClaims;
class RefreshTokenInput {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RefreshTokenInput.prototype, "refreshToken", void 0);
exports.RefreshTokenInput = RefreshTokenInput;
class saveTokenCodeDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], saveTokenCodeDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], saveTokenCodeDto.prototype, "accessToken", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], saveTokenCodeDto.prototype, "refreshToken", void 0);
exports.saveTokenCodeDto = saveTokenCodeDto;
//# sourceMappingURL=auth-token-output.dto.js.map