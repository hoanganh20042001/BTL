import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { getCostDto, getDetailPayDto, listAllPayDto, listPayByStatusDto, listPayByUserIdDto } from '../dto/pay/list-all-pay-dto.dto';
import { createPayDto, orderItemDto, updatePayDto, updateStatusPayDto } from '../dto/pay/pay-dto.dto';

import { MailService } from 'src/mail/mail.service';
import { PAY_STATUS } from 'src/constants';
import { PayRepository } from 'src/dao/pay.repository';
import { OrderRepository } from 'src/dao/order.repository';
import { ProductRepository } from 'src/dao/product.repository';
import { DiscountRepository } from 'src/dao/discount.repository';
import { UserRepository } from 'src/dao/user.repository';

@Injectable()
export class PayService {
  constructor(
    private readonly payRepository: PayRepository,
    private readonly orderRepository: OrderRepository,
    private readonly productRepository: ProductRepository,
    private readonly discountRepository: DiscountRepository,
    private readonly userRepository: UserRepository,
    private readonly mailService: MailService,

  ) { }
  async createPay(input: createPayDto) {
    let cost = 0;
    const discount = await this.discountRepository.findOne({ id: input.discountId });
    if (discount) {
      cost = cost + discount.value;
    }

    try {
      const newPay = this.payRepository.create(input);

      await newPay.save();
      await Promise.all(input.orderItems.map(async (orderItem: orderItemDto) => {
        const order = await this.orderRepository.findOne({ id: orderItem.orderId });
        const product = await this.productRepository.findOne({ id: order.productId });
        if (order) {
          order.payId = newPay.id;
          await order.save();
          product.quantity = product.quantity - order.quantity;
          product.sold = product.sold + order.quantity;
          cost = cost + product.discountedPrice;
          await product.save();
        } else {
          throw new NotFoundException(`Order with ID ${orderItem.orderId} not found`);
        }
      }));

      newPay.cost = cost;
      await newPay.save();
      return newPay; // Trả về khoản thanh toán mới được tạo
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!');
    }
  }


  async listAllPay(payload: listAllPayDto) {
    const { search } = payload;

    let listPay = await this.payRepository
      .createQueryBuilder('p')
      .select(['p.*'])
      .orderBy('p.date', 'ASC')
      .getRawMany(); // Lấy dữ liệu dưới dạng một mảng

    if (search) {
      // Thực hiện tìm kiếm nếu có
      listPay = listPay.filter(item =>
        (item.name.includes(search) || item.description.includes(search))
      );
    }
    try {
      const transformedListPay = await Promise.all(listPay.map(async item => {
        const order = await this.orderRepository
          .createQueryBuilder('o')
          .select(['o.*', 'p.name as product', 'p.discount as discount'])
          .leftJoin('product', 'p', 'p.id=o.productId')
          .where('o.payId = :payId', { payId: item.id })
          .getRawMany(); // Lấy dữ liệu dưới dạng một mảng

        return {
          ...item,
          order: order
        };
      }));

      return transformedListPay; // Trả về kết quả
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!');
    }
  }
  async listPayByUserId(payload: listPayByUserIdDto) {
    const { userId, search } = payload;

    let listPay = await this.payRepository
      .createQueryBuilder('p')
      .select(['p.*'])
      .where('p.userId = :userId', { userId: payload.userId })
      .orderBy('p.date', 'ASC')
      .getRawMany(); // Lấy dữ liệu dưới dạng một mảng

    if (search) {
      // Thực hiện tìm kiếm nếu có
      listPay = listPay.filter(item =>
        (item.name.includes(search) || item.description.includes(search))
      );
    }
    try {
      const transformedListPay = await Promise.all(listPay.map(async item => {
        const order = await this.orderRepository
          .createQueryBuilder('o')
          .select(['o.*', 'p.name as product', 'p.discount as discount'])
          .leftJoin('product', 'p', 'p.id=o.productId')
          .where('o.payId = :payId', { payId: item.id })
          .getRawMany(); // Lấy dữ liệu dưới dạng một mảng

        return {
          ...item,
          order: order
        };
      }));

      return transformedListPay; // Trả về kết quả
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!');
    }
  }


  async listPayByStatus(payload: listPayByStatusDto) {
    const { status } = payload;
    let listPay = await this.payRepository
      .createQueryBuilder('p')
      .select(['p.*'])
      .orderBy('p.date', 'ASC')
      .getRawMany();

    try {
      const transformedListPay = await Promise.all(listPay.map(async item => {
        const order = await this.orderRepository
          .createQueryBuilder('o')
          .select(['o.*', 'p.name as product', 'p.discount as discount'])
          .leftJoin('product', 'p', 'p.id=o.productId')
          .where('o.payId = :payId', { payId: item.id })
          .getRawMany(); // Lấy dữ liệu dưới dạng một mảng

        return {
          ...item,
          order: order
        };
      }));

      return transformedListPay; // Trả về kết quả

    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailPay(payload: getDetailPayDto) {
    const { PayId } = payload;
    const Pay = this.productRepository
      .createQueryBuilder('p')
      .select(['p.*',
        'o.quantity as quantity',
        'p.name as product',
        'p.price as price',
        'p.discountedProduct as dicountedProduct',
        'p.discount as discount'
      ])
      .leftJoin('order', 'o', 'o.payId=p.id')
      .where('o.payId = :payId', { payId: payload.PayId })
      .getRawMany();
    return Pay;

  }

  async getCost(payload: getCostDto) {
    const { discountId, orderItems } = payload;
    let cost = 0;
    await Promise.all(payload.orderItems.map(async (orderItem: orderItemDto) => {
      const order = await this.orderRepository.findOne({ id: orderItem.orderId });
      const product = await this.productRepository.findOne({ id: order.productId });
      if (order) {
        cost = cost + product.discountedPrice;
      } else {
        throw new NotFoundException(`Order with ID ${orderItem.orderId} not found`);
      }
    }));
    const discount = this.discountRepository.findOne({ id: payload.discountId });
    cost = cost - (await discount).value;
    return cost;
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

    const findUser = await this.userRepository.findOne({ id: findPayById.userId });
    const discount = await this.discountRepository.findOne({ id: findPayById.discountId });

    const products = await this.productRepository
      .createQueryBuilder('p')
      .select([
        'o.quantity as quantity',
        'p.name as product',
        'p.price as price',
        'p.discountedPrice as discountedPrice',
        'p.discount as discount'
      ])
      .leftJoin('order', 'o', 'o.productId = p.id')
      .where('o.payId = :payId', { payId: payload.PayId })
      .getRawMany();
    console.log(findUser)
    if (payload.status === PAY_STATUS.DTT) {
      await this.mailService.paymentSuccessful({
        emailTo: findUser.email,
        subject: 'Thanh toán hóa đơn thành công',
        name: findUser.fullName,
        products: products,
        value: discount ? discount.value : 0,
        cost: findPayById.cost,
        bankName: findPayById.bankName
      });
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
