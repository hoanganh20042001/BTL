import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailRoleDto, listAllRoleDto } from '../dto/role/list-all-role-dto.dto';
import { createRoleDto, updateRoleDto } from '../dto/role/role-dto.dto';
import { RoleRepository } from 'src/dao/role.repository';


@Injectable()
export class RoleService {
  constructor(
    private readonly roleRepository: RoleRepository
  ) { }
  async createRole(input: createRoleDto) {
    try {
      const newRole = this.roleRepository.create(input);
      return await newRole.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllRole(payload: listAllRoleDto) {
    const { search, limit, page } = payload;
    const listRole = this.roleRepository
      .createQueryBuilder('b')
      .select('b.*')
      .orderBy('b.id', 'ASC')
      .limit(limit)
      .offset(limit * (page - 1));
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listRole.andWhere(
        '( b.name LIKE :search OR b.description LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listRole.getRawMany(),
        listRole.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailRole(payload: getDetailRoleDto) {
    const { roleId } = payload;
    const Role = await this.roleRepository.findOne(roleId);
    return Role;

  }

  async updateRole(payload: updateRoleDto) {

    const findRoleById = await this.roleRepository.findOne(payload.roleId);
    if (!findRoleById) {
      throw new BadRequestException("Role_is_not_exist");
    }
    const updatedItem = { ...findRoleById, ...payload };
    return await this.roleRepository.save(updatedItem);
  }

  async deleteRole(payload: getDetailRoleDto) {
    const { roleId } = payload;
    const role = await this.roleRepository.findOne(roleId);
    if (!role) {
      throw new BadRequestException("Role_is_not_exist");
    }
    await this.roleRepository.remove(role);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
