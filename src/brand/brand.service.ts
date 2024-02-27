import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailBrandDto,listAllBrandDto } from './dto/list-all-brand-dto.dto';
import { createBrandDto, updateBrandDto } from './dto/brand-dto.dto';
import { BrandRepository } from './brand.repository';

@Injectable()
export class BrandService {
  constructor(
    private readonly brandRepository: BrandRepository
  ) { }
  async createBrand(input: createBrandDto) {
    try {
      const newBrand = this.brandRepository.create(input);
      return await newBrand.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllBrand(payload: listAllBrandDto) {
    const { search, limit, page } = payload;
    const listBrand = this.brandRepository
      .createQueryBuilder('b')
      .select('b.*')
      .orderBy('b.id', 'ASC')
      .limit(limit)
      .offset(limit * (page - 1));
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listBrand.andWhere(
        '( b.name LIKE :search OR b.description LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listBrand.getRawMany(),
        listBrand.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailBrand(payload: getDetailBrandDto) {
    const { brandId } = payload;
    const Brand = await this.brandRepository.findOne(brandId);
    return Brand;

  }

  async updateBrand(payload: updateBrandDto) {

    const findBrandById = await this.brandRepository.findOne(payload.BrandId);
    if (!findBrandById) {
      throw new BadRequestException("Brand_is_not_exist");
    }
    const updatedItem = { ...findBrandById, ...payload };
    return await this.brandRepository.save(updatedItem);
  }

  async deleteBrand(payload: getDetailBrandDto) {
    const { brandId } = payload;
    const Brand = await this.brandRepository.findOne(brandId);
    if (!Brand) {
      throw new BadRequestException("Brand_is_not_exist");
    }
    await this.brandRepository.remove(Brand);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
