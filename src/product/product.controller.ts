import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

@ApiTags('role')
@Controller('product')
export class ProductController {
  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('create')
  async createRole(

  ) {

  }
}
