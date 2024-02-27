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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async listAllClient(payload) {
        const { search, limit, page } = payload;
        const listUser = this.userRepository
            .createQueryBuilder('b')
            .select('b.*')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1))
            .andWhere('b.roleId = :roleId', { roleId: 2 });
        if (search) {
            listUser.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listUser.getRawMany(),
                listUser.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailUser(payload) {
        const { UserId } = payload;
        const User = await this.userRepository.findOne(UserId);
        return User;
    }
    async updateUser(payload) {
        const findUserById = await this.userRepository.findOne(payload.UserId);
        if (!findUserById) {
            throw new common_1.BadRequestException("User_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findUserById), payload);
        return await this.userRepository.save(updatedItem);
    }
    async deleteUser(payload) {
        const { UserId } = payload;
        const User = await this.userRepository.findOne(UserId);
        if (!User) {
            throw new common_1.BadRequestException("User_is_not_exist");
        }
        await this.userRepository.remove(User);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map