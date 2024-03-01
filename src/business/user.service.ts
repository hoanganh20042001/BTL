import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailUserDto, listAllUserDto } from '../dto/user/list-all-user-dto.dto';
import { updateUserDto } from '../dto/user/user-dto.dto';
import { UserRepository } from '../dao/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) { }
  // async createUser(input: createUserDto) {
  //   try {
  //     const newUser = this.UserRepository.create(input);
  //     return await newUser.save();
  //   } catch (error) {
  //     throw new BadRequestException('Có lỗi xảy ra!')
  //   }

  // }

  async listAllClient(payload: listAllUserDto) {
    const { search, limit, page } = payload;
    const listUser = this.userRepository
      .createQueryBuilder('b')
      .select('b.*')
      .orderBy('b.id', 'ASC')
      .limit(limit)
      .offset(limit * (page - 1))
      .andWhere('b.roleId = :roleId', { roleId: 2 });
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listUser.andWhere(
        '( b.name LIKE :search OR b.description LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listUser.getRawMany(),
        listUser.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailUser(payload: getDetailUserDto) {
    const { UserId } = payload;
    const User = await this.userRepository.findOne(UserId);
    return User;

  }

  async updateUser(payload: updateUserDto) {

    const findUserById = await this.userRepository.findOne(payload.UserId);
    if (!findUserById) {
      throw new BadRequestException("User_is_not_exist");
    }
    const updatedItem = { ...findUserById, ...payload };
    return await this.userRepository.save(updatedItem);
  }

  async deleteUser(payload: getDetailUserDto) {
    const { UserId } = payload;
    const User = await this.userRepository.findOne(UserId);
    if (!User) {
      throw new BadRequestException("User_is_not_exist");
    }
    await this.userRepository.remove(User);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
