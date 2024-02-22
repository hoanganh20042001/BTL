import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailProductDto,listAllProductDto } from './dto/list-all-product-dto.dto';
import { createProductDto, updateProductDto } from './dto/product-dto.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    private readonly ProductRepository: ProductRepository
  ) { }
  async createProduct(input: createProductDto) {
    try {
      const newProduct = this.ProductRepository.create(input);
      return await newProduct.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllProduct(payload: listAllProductDto) {
    const { search, limit, page } = payload;
    const listProduct = this.ProductRepository
      .createQueryBuilder('b')
      .select('b.*')
      .orderBy('b.id', 'ASC')
      .limit(limit)
      .offset(limit * (page - 1));
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listProduct.andWhere(
        '( b.name LIKE :search OR b.description LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listProduct.getRawMany(),
        listProduct.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailProduct(payload: getDetailProductDto) {
    const { ProductId } = payload;
    const Product = await this.ProductRepository.findOne(ProductId);
    return Product;

  }

  async updateProduct(payload: updateProductDto) {

    const findProductById = await this.ProductRepository.findOne(payload.ProductId);
    if (!findProductById) {
      throw new BadRequestException("Product_is_not_exist");
    }
    const updatedItem = { ...findProductById, ...payload };
    return await this.ProductRepository.save(updatedItem);
  }

  async deleteProduct(payload: getDetailProductDto) {
    const { ProductId } = payload;
    const Product = await this.ProductRepository.findOne(ProductId);
    if (!Product) {
      throw new BadRequestException("Product_is_not_exist");
    }
    await this.ProductRepository.remove(Product);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
