import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailTypeDto,listAllTypeDto } from './dto/list-all-type-dto.dto';
import { createTypeDto, updateTypeDto } from './dto/type-dto.dto';
import { TypeRepository } from './type.repository';

@Injectable()
export class TypeService {
  constructor(
    private readonly TypeRepository: TypeRepository
  ) { }
  async createType(input: createTypeDto) {
    try {
      const newType = this.TypeRepository.create(input);
      return await newType.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllType(payload: listAllTypeDto) {
    const { search, limit, page } = payload;
    const listType = this.TypeRepository
      .createQueryBuilder('b')
      .select('b.*')
      .orderBy('b.id', 'ASC')
      .limit(limit)
      .offset(limit * (page - 1));
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listType.andWhere(
        '( b.name LIKE :search OR b.description LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listType.getRawMany(),
        listType.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailType(payload: getDetailTypeDto) {
    const { TypeId } = payload;
    const Type = await this.TypeRepository.findOne(TypeId);
    return Type;

  }

  async updateType(payload: updateTypeDto) {

    const findTypeById = await this.TypeRepository.findOne(payload.TypeId);
    if (!findTypeById) {
      throw new BadRequestException("Type_is_not_exist");
    }
    const updatedItem = { ...findTypeById, ...payload };
    return await this.TypeRepository.save(updatedItem);
  }

  async deleteType(payload: getDetailTypeDto) {
    const { TypeId } = payload;
    const Type = await this.TypeRepository.findOne(TypeId);
    if (!Type) {
      throw new BadRequestException("Type_is_not_exist");
    }
    await this.TypeRepository.remove(Type);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
