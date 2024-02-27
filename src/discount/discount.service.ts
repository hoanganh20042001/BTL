import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailDiscountDto,listAllDiscountDto } from './dto/list-all-discount-dto.dto';
import { createDiscountDto, updateDiscountDto } from './dto/discount-dto.dto';
import { DiscountRepository } from './discount.repository';

@Injectable()
export class DiscountService {
  constructor(
    private readonly discountRepository: DiscountRepository
  ) { }
  async createDiscount(input: createDiscountDto) {
    try {
      const newDiscount = this.discountRepository.create(input);
      return await newDiscount.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllDiscount(payload: listAllDiscountDto) {
    const { search, limit, page } = payload;
    const listDiscount = this.discountRepository
      .createQueryBuilder('b')
      .select('b.*')
      .orderBy('b.id', 'ASC')
      .limit(limit)
      .offset(limit * (page - 1));
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listDiscount.andWhere(
        '( b.name LIKE :search OR b.description LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listDiscount.getRawMany(),
        listDiscount.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailDiscount(payload: getDetailDiscountDto) {
    const { DiscountId } = payload;
    const Discount = await this.discountRepository.findOne(DiscountId);
    return Discount;

  }

  async updateDiscount(payload: updateDiscountDto) {

    const findDiscountById = await this.discountRepository.findOne(payload.DiscountId);
    if (!findDiscountById) {
      throw new BadRequestException("Discount_is_not_exist");
    }
    const updatedItem = { ...findDiscountById, ...payload };
    return await this.discountRepository.save(updatedItem);
  }

  async deleteDiscount(payload: getDetailDiscountDto) {
    const { DiscountId } = payload;
    const Discount = await this.discountRepository.findOne(DiscountId);
    if (!Discount) {
      throw new BadRequestException("Discount_is_not_exist");
    }
    await this.discountRepository.remove(Discount);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
