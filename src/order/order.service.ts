import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailOrderDto,listAllOrderDto } from './dto/list-all-order-dto.dto';
import { createOrderDto, payInOrderDto, updateOrderDto } from './dto/order-dto.dto';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(
    private readonly OrderRepository: OrderRepository
  ) { }
  async createOrder(input: createOrderDto) {
    try {
      const newOrder = this.OrderRepository.create(input);
      return await newOrder.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllOrder(payload: listAllOrderDto) {
    const { search,userId } = payload;
    const listOrder = this.OrderRepository
    .createQueryBuilder('o')
    .select(['o.*',
    'p.name as product'
  ])
    .leftJoin('product','p','o.productId=p.id')
    .where('o.userId = :userId', { userId: payload.userId });
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listOrder.andWhere(
        '( p.name LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listOrder.getRawMany(),
        listOrder.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailOrder(payload: getDetailOrderDto) {
    const { OrderId } = payload;
    const Order = await this.OrderRepository.findOne(OrderId);
    return Order;

  }

  async updateOrder(payload: updateOrderDto) {

    const findOrderById = await this.OrderRepository.findOne(payload.OrderId);
    if (!findOrderById) {
      throw new BadRequestException("Order_is_not_exist");
    }
    const updatedItem = { ...findOrderById, ...payload };
    return await this.OrderRepository.save(updatedItem);
  }


  async pay(payload: payInOrderDto) {

    const findOrderById = await this.OrderRepository.findOne(payload.OrderId);
    if (!findOrderById) {
      throw new BadRequestException("Order_is_not_exist");
    }
    const updatedItem = { ...findOrderById, ...payload };
    return await this.OrderRepository.save(updatedItem);
  }
  async deleteOrder(payload: getDetailOrderDto) {
    const { OrderId } = payload;
    const Order = await this.OrderRepository.findOne(OrderId);
    if (!Order) {
      throw new BadRequestException("Order_is_not_exist");
    }
    await this.OrderRepository.remove(Order);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
