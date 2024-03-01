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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const role_repository_1 = require("../dao/role.repository");
let RoleService = class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async createRole(input) {
        try {
            const newRole = this.roleRepository.create(input);
            return await newRole.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllRole(payload) {
        const { search, limit, page } = payload;
        const listRole = this.roleRepository
            .createQueryBuilder('b')
            .select('b.*')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listRole.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listRole.getRawMany(),
                listRole.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailRole(payload) {
        const { roleId } = payload;
        const Role = await this.roleRepository.findOne(roleId);
        return Role;
    }
    async updateRole(payload) {
        const findRoleById = await this.roleRepository.findOne(payload.roleId);
        if (!findRoleById) {
            throw new common_1.BadRequestException("Role_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findRoleById), payload);
        return await this.roleRepository.save(updatedItem);
    }
    async deleteRole(payload) {
        const { roleId } = payload;
        const role = await this.roleRepository.findOne(roleId);
        if (!role) {
            throw new common_1.BadRequestException("Role_is_not_exist");
        }
        await this.roleRepository.remove(role);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_repository_1.RoleRepository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map