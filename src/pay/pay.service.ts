import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailPayDto,listAllPayDto, listPayByStatusDto } from './dto/list-all-pay-dto.dto';
import { createPayDto, updatePayDto, updateStatusPayDto } from './dto/pay-dto.dto';
import { PayRepository } from './pay.repository';
import { OrderRepository } from 'src/order/order.repository';
import { ProductRepository } from 'src/product/product.repository';

@Injectable()
export class PayService {
  constructor(
    private readonly payRepository: PayRepository,
    private readonly orderRepository: OrderRepository,
    private readonly productRepository: ProductRepository
  ) { }
  async createPay(input: createPayDto) {
    try {
      const newPay = this.payRepository.create(input);
      return await newPay.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllPay(payload: listAllPayDto) {
    const { search } = payload;
    const listPay = this.payRepository
      .createQueryBuilder('p')
      .select(['p.*',
      'o.quantity as quantity',
      'p.name as product'
    ])
      .leftJoin('order','o','o.payId=p.id')
      .leftJoin('product','p','p.id=o.productId')
      .orderBy('p.date', 'ASC');
      // .limit(limit)
      // .offset(limit * (page - 1));
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listPay.andWhere(
        '( p.name LIKE :search OR p.description LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listPay.getRawMany(),
        listPay.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listPayByStatus(payload: listPayByStatusDto) {
    const { status } = payload;
    const listPay = this.payRepository
      .createQueryBuilder('p')
      .select(['p.*',
      'o.quantity as quantity',
      'p.name as product'
    ])
      .leftJoin('order','o','o.payId=p.id')
      .leftJoin('product','p','p.id=o.productId')
      .where('p.status = :status', { status: payload.status})
      .orderBy('p.date', 'ASC');
      // .limit(limit)
      // .offset(limit * (page - 1));
  
    try {
      const [list, count] = await Promise.all([
        listPay.getRawMany(),
        listPay.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailPay(payload: getDetailPayDto) {
    const { PayId } = payload;
    const Pay = this.payRepository
    .createQueryBuilder('p')
    .select(['p.*',
    'o.quantity as quantity',
    'p.name as product'
  ])
    .leftJoin('order','o','o.payId=p.id')
    .leftJoin('product','p','p.id=o.productId')
    .where('p.id = :id', { id: payload.PayId });
    return Pay;

  }

  async updatePay(payload: updatePayDto) {

    const findPayById = await this.payRepository.findOne(payload.PayId);
    if (!findPayById) {
      throw new BadRequestException("Pay_is_not_exist");
    }
    const updatedItem = { ...findPayById, ...payload };
    return await this.payRepository.save(updatedItem);
  }

  async updateStatusPay(payload: updateStatusPayDto) {

    const findPayById = await this.payRepository.findOne(payload.PayId);
    if (!findPayById) {
      throw new BadRequestException("Pay_is_not_exist");
    }
    const updatedItem = { ...findPayById, ...payload };
    return await this.payRepository.save(updatedItem);
  }


  async deletePay(payload: getDetailPayDto) {
    const { PayId } = payload;
    const Pay = await this.payRepository.findOne(PayId);
    if (!Pay) {
      throw new BadRequestException("Pay_is_not_exist");
    }
    await this.payRepository.remove(Pay);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
