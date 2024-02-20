import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailCategoryDto,listAllCategoryDto } from './dto/list-all-category-dto.dto';
import { createCategoryDto, updateCategoryDto } from './dto/category-dto.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(
    private readonly CategoryRepository: CategoryRepository
  ) { }
  async createCategory(input: createCategoryDto) {
    try {
      const newCategory = this.CategoryRepository.create(input);
      return await newCategory.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllCategory(payload: listAllCategoryDto) {
    const { search, limit, page } = payload;
    const listCategory = this.CategoryRepository
      .createQueryBuilder('b')
      .select('b.*')
      .orderBy('b.id', 'ASC')
      .limit(limit)
      .offset(limit * (page - 1));
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listCategory.andWhere(
        '( b.name LIKE :search OR b.description LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listCategory.getRawMany(),
        listCategory.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailCategory(payload: getDetailCategoryDto) {
    const { CategoryId } = payload;
    const Category = await this.CategoryRepository.findOne(CategoryId);
    return Category;

  }

  async updateCategory(payload: updateCategoryDto) {

    const findCategoryById = await this.CategoryRepository.findOne(payload.categoryId);
    if (!findCategoryById) {
      throw new BadRequestException("Category_is_not_exist");
    }
    const updatedItem = { ...findCategoryById, ...payload };
    return await this.CategoryRepository.save(updatedItem);
  }

  async deleteCategory(payload: getDetailCategoryDto) {
    const { CategoryId } = payload;
    const Category = await this.CategoryRepository.findOne(CategoryId);
    if (!Category) {
      throw new BadRequestException("Category_is_not_exist");
    }
    await this.CategoryRepository.remove(Category);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
