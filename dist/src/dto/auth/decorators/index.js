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
exports.SwaggerBaseApiResponse = exports.BaseApiErrorResponse = exports.BaseApiErrorObject = exports.BaseApiResponse = exports.createRequestContext = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const role_constant_1 = require("../constants/role.constant");
const auth_token_output_dto_1 = require("../dto/auth-token-output.dto");
const request_context_dto_1 = require("./request-context.dto");
function createRequestContext(request) {
    const ctx = new request_context_dto_1.RequestContext();
    ctx.requestID = request.header(role_constant_1.REQUEST_ID_TOKEN_HEADER);
    ctx.url = request.url;
    ctx.ip = request.header(role_constant_1.FORWARDED_FOR_TOKEN_HEADER)
        ? request.header(role_constant_1.FORWARDED_FOR_TOKEN_HEADER)
        : request.ip;
    ctx.user = request.user
        ? (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.UserAccessTokenClaims, request.user, {
            excludeExtraneousValues: true
        })
        : null;
    return ctx;
}
exports.createRequestContext = createRequestContext;
class BaseApiResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: Object }),
    __metadata("design:type", Object)
], BaseApiResponse.prototype, "meta", void 0);
exports.BaseApiResponse = BaseApiResponse;
class BaseApiErrorObject {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], BaseApiErrorObject.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "localizedMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "errorName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Object }),
    __metadata("design:type", Object)
], BaseApiErrorObject.prototype, "details", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "requestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "timestamp", void 0);
exports.BaseApiErrorObject = BaseApiErrorObject;
class BaseApiErrorResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: BaseApiErrorObject }),
    __metadata("design:type", BaseApiErrorObject)
], BaseApiErrorResponse.prototype, "error", void 0);
exports.BaseApiErrorResponse = BaseApiErrorResponse;
function SwaggerBaseApiResponse(type) {
    class ExtendedBaseApiResponse extends BaseApiResponse {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type }),
        __metadata("design:type", Object)
    ], ExtendedBaseApiResponse.prototype, "data", void 0);
    const isAnArray = Array.isArray(type) ? ' [ ] ' : '';
    Object.defineProperty(ExtendedBaseApiResponse, 'name', {
        value: `SwaggerBaseApiResponseFor ${type} ${isAnArray}`
    });
    return ExtendedBaseApiResponse;
}
exports.SwaggerBaseApiResponse = SwaggerBaseApiResponse;
//# sourceMappingURL=index.js.map