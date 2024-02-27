import { BadRequestException, Injectable } from '@nestjs/common';

import { getDetailAddressDto,listAllAddressDto } from './dto/list-all-address-dto.dto';
import { createAddressDto, updateAddressDto } from './dto/address-dto.dto';
import { AddressRepository } from './address.repository';

@Injectable()
export class AddressService {
  constructor(
    private readonly addressRepository: AddressRepository
  ) { }
  async createAddress(input: createAddressDto) {
    try {
      const newAddress = this.addressRepository.create(input);
      return await newAddress.save();
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async listAllAddress(payload: listAllAddressDto) {
    const { search, limit, page } = payload;
    const listAddress = this.addressRepository
      .createQueryBuilder('b')
      .select('b.*')
      .orderBy('b.id', 'ASC')
      .limit(limit)
      .offset(limit * (page - 1));
    if (search) {
      //viết hết tất car các trường cần tìm kiếm
      listAddress.andWhere(
        '( b.name LIKE :search OR b.description LIKE :search )',
        { search: `%${search}%` }
      );
    }
    try {
      const [list, count] = await Promise.all([
        listAddress.getRawMany(),
        listAddress.getCount()
      ]);

      return { list, count };
    } catch (error) {
      throw new BadRequestException('Có lỗi xảy ra!')
    }

  }

  async getDetailAddress(payload: getDetailAddressDto) {
    const { AddressId } = payload;
    const Address = await this.addressRepository.findOne(AddressId);
    return Address;

  }

  async updateAddress(payload: updateAddressDto) {

    const findAddressById = await this.addressRepository.findOne(payload.AddressId);
    if (!findAddressById) {
      throw new BadRequestException("Address_is_not_exist");
    }
    const updatedItem = { ...findAddressById, ...payload };
    return await this.addressRepository.save(updatedItem);
  }

  async deleteAddress(payload: getDetailAddressDto) {
    const { AddressId } = payload;
    const Address = await this.addressRepository.findOne(AddressId);
    if (!Address) {
      throw new BadRequestException("Address_is_not_exist");
    }
    await this.addressRepository.remove(Address);
    return { status: 200, message: 'Xóa thành công!' };
  }
}
