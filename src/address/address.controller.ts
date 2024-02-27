import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { getDetailAddressDto,listAllAddressDto } from './dto/list-all-address-dto.dto';
import { createAddressDto, updateAddressDto } from './dto/address-dto.dto';
import { AddressService } from './address.service';

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
