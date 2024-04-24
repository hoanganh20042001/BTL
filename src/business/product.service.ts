import { BadRequestException, Injectable } from '@nestjs/common';

import { filterProductDto, getDetailProductDto, listAllProductDto } from '../dto/product/list-all-product-dto.dto';
import { createProductDto, updateProductDto } from '../dto/product/product-dto.dto';
import { ProductRepository } from '../dao/product.repository';
import { CategoryRepository } from 'src/dao/category.repository';
import { BrandRepository } from 'src/dao/brand.repository';
import { TypeRepository } from 'src/dao/type.repository';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly brandRepository: BrandRepository,
    private readonly typeRepository: TypeRepository,
    private readonly categoryRepository: CategoryRepository,
  ) { }
  async createProduct(input: createProductDto, url: string) {
    try {
      const newProduct = this.productRepository.create(input);
      await newProduct.save();
      let discountedPrice = 0;
      if (newProduct.discount < 100) {
        discountedPrice = ((newProduct.discount + 100) * newProduct.price) / 100;
      }
      else {
        discountedPrice = newProduct.discount + newProduct.price;
      }
      newProduct.discountedPrice = discountedPrice;
      newProduct.image = url;
      return await newProduct.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }
  }

  async listAllProduct(payload: listAllProductDto) {
    const { search, limit, page } = payload;
    const listProduct = this.productRepository
      .createQueryBuilder('b')
      .select(['b.*',
        't.name as type',
        'br.name as brand',
        'c.name as category'
      ])
      .leftJoin('type', 't', 'b.typeId = t.id')
      .leftJoin('brand', 'br', 'b.brandId = br.id')
      .leftJoin('category', 'c', 'b.categoryId = c.id')
      .orderBy('b.id', 'ASC')
      .limit(limit)
      .offset(limit * (page - 1));
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listProduct.andWhere(
        '( b.name LIKE :search OR b.description LIKE :search OR t.name LIKE :search OR br.name LIKE :search OR c.name LIKE :search )',
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
    const Product = await this.productRepository
      .createQueryBuilder('b')
      .select(['b.*',
        't.name as type',
        'br.name as brand',
        'c.name as category'
      ])
      .leftJoin('type', 't', 'b.typeId = t.id')
      .leftJoin('brand', 'br', 'b.brandId = br.id')
      .leftJoin('category', 'c', 'b.categoryId = c.id')
      .where('b.id = :id', { id: ProductId }).getRawOne();
    return Product;

  }

  async updateProduct(payload: updateProductDto, url: string) {

    const findProductById = await this.productRepository.findOne(payload.ProductId);
    if (!findProductById) {
      throw new BadRequestException("Product_is_not_exist");
    }
    const updatedItem = { ...findProductById, ...payload };
    await this.productRepository.save(updatedItem);
    let discountedPrice = 0;
    if (findProductById.discount < 100) {
      discountedPrice = ((findProductById.discount + 100) * findProductById.price) / 100;
    }
    else {
      discountedPrice = findProductById.discount + findProductById.price;
    }
    findProductById.discountedPrice = discountedPrice;
    findProductById.image = url;
    return await findProductById.save();
  }

  async deleteProduct(payload: getDetailProductDto) {
    const { ProductId } = payload;
    const Product = await this.productRepository.findOne(ProductId);
    if (!Product) {
      throw new BadRequestException("Product_is_not_exist");
    }
    await this.productRepository.remove(Product);
    return { status: 200, message: 'Xóa thành công!' };
  }

  async filterProduct(payload: filterProductDto) {
    const findTypeByName = await this.typeRepository.findOne({ name: payload.type });
    const findBrandByName = await this.brandRepository.findOne({ name: payload.brand });
    const findCategoryByName = await this.categoryRepository.findOne({ name: payload.category });

    const listProduct = this.productRepository
      .createQueryBuilder('b')
      .select([
        'b.*',
        't.name as type',
        'br.name as brand',
        'c.name as category'
      ])
      .leftJoin('type', 't', 'b.typeId = t.id')
      .leftJoin('brand', 'br', 'b.brandId = br.id')
      .leftJoin('category', 'c', 'b.categoryId = c.id');

    if (findTypeByName) {
      listProduct.andWhere('b.typeId = :typeId', { typeId: findTypeByName.id });
    }
    if (findBrandByName) {
      listProduct.andWhere('b.brandId = :brandId', { brandId: findBrandByName.id });
    }
    if (findCategoryByName) {
      listProduct.andWhere('b.categoryId = :categoryId', { categoryId: findCategoryByName.id });
    }
    if ((payload.maxPrice !== undefined && payload.minPrice !== undefined) ||
      (payload.maxPrice !== undefined && payload.minPrice === undefined) ||
      (payload.maxPrice === undefined && payload.minPrice !== undefined)) {
      let condition = '';
      const params: any = {};

      if (payload.maxPrice !== undefined && payload.minPrice !== undefined) {
        condition = '(b.price <= :maxPrice AND b.price >= :minPrice)';
        params.maxPrice = payload.maxPrice;
        params.minPrice = payload.minPrice;
      } else if (payload.maxPrice !== undefined) {
        condition = 'b.price <= :maxPrice';
        params.maxPrice = payload.maxPrice;
      } else {
        condition = 'b.price >= :minPrice';
        params.minPrice = payload.minPrice;
      }

      listProduct.andWhere(condition, params);
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

}
