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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const decorators_1 = require("./decorators");
const req_context_decorator_1 = require("./decorators/req-context.decorator");
const request_context_dto_1 = require("./decorators/request-context.dto");
const auth_token_output_dto_1 = require("./dto/auth-token-output.dto");
const sign_in_dto_1 = require("./dto/sign-in.dto");
const sign_up_dto_1 = require("./dto/sign-up.dto");
const auth_guard_1 = require("./guards/auth.guard");
const jwt_refresh_guard_1 = require("./guards/jwt-refresh.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async registerUser(input) {
        return this.authService.createUser(input);
    }
    async loginStudent(input) {
        return this.authService.login(input);
    }
    async loginAdmin(input) {
        return this.authService.loginAdmin(input);
    }
    async refreshToken(ctx, credential) {
        const authToken = await this.authService.refreshToken(ctx);
        return { data: authToken, meta: {} };
    }
    logout(req) {
        return this.authService.logout(req);
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_dto_1.SignupDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('/login-student'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.SigninDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginStudent", null);
__decorate([
    (0, common_1.Post)('/login-admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.SigninDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginAdmin", null);
__decorate([
    (0, common_1.Post)('refresh-token'),
    (0, swagger_1.ApiOperation)({
        summary: 'Refresh access token API'
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: (0, decorators_1.SwaggerBaseApiResponse)(auth_token_output_dto_1.AuthTokenOutput)
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        type: decorators_1.BaseApiErrorResponse
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_refresh_guard_1.JwtRefreshGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext,
        auth_token_output_dto_1.RefreshTokenInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map