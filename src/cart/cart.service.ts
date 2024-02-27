import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailCartDto,listAllCartDto } from './dto/list-all-cart-dto.dto';
import { createCartDto, updateCartDto } from './dto/cart-dto.dto';
import { CartRepository } from './cart.repository';
import { ProductRepository } from 'src/product/product.repository';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly productRepository: ProductRepository,
    private readonly userRepository: UserRepository
  ) { }
  async createCart(input: createCartDto) {
    const findProductById=await this.productRepository.findOne({id:input.productId});
    if(findProductById.quantity>=0){
      throw new BadRequestException('Số lượng sản phẩm đã hết!')
    }
    try {
      const newCart = this.cartRepository.create(input);
      return await newCart.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllCartByUserId(payload: listAllCartDto) {
    const { search, userId } = payload;
    let listCart = this.cartRepository
    .createQueryBuilder('c')
    .select(['c.*',
    'p.name as product'
  ])
    .leftJoin('product','p','c.productId=p.id')
    .where('c.userId = :userId', { userId: payload.userId });
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listCart.andWhere(
        '( p.name LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listCart.getRawMany(),
        listCart.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailCart(payload: getDetailCartDto) {
    const { CartId } = payload;
    let Cart = this.cartRepository
    .createQueryBuilder('c')
    .select(['c.*',
    'p.name as product'
  ])
    .leftJoin('product','p','c.productId=p.id')
    .where('c.id = :id', { id: payload.CartId });
    return Cart;

  }

  async updateCart(payload: updateCartDto) {

    const findCartById = await this.cartRepository.findOne(payload.CartId);
    if (!findCartById) {
      throw new BadRequestException("Cart_is_not_exist");
    }
    const updatedItem = { ...findCartById, ...payload };
    return await this.cartRepository.save(updatedItem);
  }

  async deleteCart(payload: getDetailCartDto) {
    const { CartId } = payload;
    const Cart = await this.cartRepository.findOne(CartId);
    if (!Cart) {
      throw new BadRequestException("Cart_is_not_exist");
    }
    await this.cartRepository.remove(Cart);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
