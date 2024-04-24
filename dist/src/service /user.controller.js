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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const list_all_user_dto_dto_1 = require("../dto/user/list-all-user-dto.dto");
const user_dto_dto_1 = require("../dto/user/user-dto.dto");
const user_service_1 = require("../business/user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async listAllUser(payload) {
        return this.userService.listAllClient(payload);
    }
    async getDetailUser(payload) {
        return this.userService.getDetailUser(payload);
    }
    async updateUser(payload) {
        return await this.userService.updateUser(payload);
    }
};
__decorate([
    (0, common_1.Get)('list-all-client'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_user_dto_dto_1.listAllUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listAllUser", null);
__decorate([
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_user_dto_dto_1.getDetailUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getDetailUser", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_dto_1.updateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map