import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { getDetailAddressDto,listAllAddressDto } from '../dto/address/list-all-address-dto.dto';
import { createAddressDto, updateAddressDto } from '../dto/address/address-dto.dto';
import { AddressService } from '../business/address.service';
import { AuthenticationGuard } from 'src/dto/auth/guards/auth.guard';

@ApiTags('Address')
@Controller('Address')
export class AddressController {
  constructor(
    private readonly addressService: AddressService
  ) { }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('create')
  async createAddress(
    @Body() payload: createAddressDto
  ) {
    return this.addressService.createAddress(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('list-all')
  async listAllAddress(@Query() payload: listAllAddressDto) {
    return this.addressService.listAllAddress(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('detail')
  async getDetailAddress(@Query() payload: getDetailAddressDto) {
    return this.addressService.getDetailAddress(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('update')
  async updateAddress(
    @Body() payload: updateAddressDto
  ) {
    return await this.addressService.updateAddress(
      payload
    );
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('delete')
  async deleteAddress(@Query() payload: getDetailAddressDto) {
    return this.addressService.deleteAddress(payload);
  }
}
