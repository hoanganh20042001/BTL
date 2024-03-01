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
exports.JwtRefreshGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const messageError_1 = require("../../../messageError");
const role_constant_1 = require("../constants/role.constant");
const auth_service_1 = require("../../../business/auth.service");
let JwtRefreshGuard = class JwtRefreshGuard extends (0, passport_1.AuthGuard)(role_constant_1.STRATEGY_JWT_REFRESH) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (request.headers.authorization) {
            const token = await this.authService.decodeToken(request.headers.authorization.split('Bearer ')[1]);
            const latestToken = await this.authService.getActiveUserToken(token === null || token === void 0 ? void 0 : token.id);
            if (latestToken &&
                request.headers.authorization.split('Bearer ')[1] !== latestToken.token) {
                throw new common_1.BadRequestException(messageError_1.MESSAGE.jwt_is_expired);
            }
        }
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException(`${info}`);
        }
        return user;
    }
};
JwtRefreshGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], JwtRefreshGuard);
exports.JwtRefreshGuard = JwtRefreshGuard;
//# sourceMappingURL=jwt-refresh.guard.js.map