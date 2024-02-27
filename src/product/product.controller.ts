import { BadRequestException, Body, Controller, Get, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';

import { filterProductDto, getDetailProductDto, listAllProductDto } from './dto/list-all-product-dto.dto';
import { FileUploadDto, createProductDto, updateProductDto } from './dto/product-dto.dto';
import { ProductService } from './product.service';
import { MinioService } from 'src/minio/minio.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly ProductService: ProductService,
    private readonly minioService: MinioService
  ) { }

  @Post('upload')
  @ApiOperation({ summary: 'Upload file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({

    required: true,
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'name'
        },
        ethnicId: {
          type: 'number',
          description: 'id dân tộc'
        },
        priorityGroupId: {
          type: 'number',
          description: 'id đối tượng ưu tiên của học sinh'
        },
      }
    }
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const bucketName = 'test';
    const objectName = file.originalname;
    const url = await this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg');
    return { url };
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'create',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'File to upload'
        },
        payload: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name'
            },
            discount: {
              type: 'number',
              description: 'Discount'
            },
            categoryId: {
              type: 'number',
              description: 'Category ID'
            },
            typeId: {
              type: 'number',
              description: 'Type ID'
            },
            quantityId: {
              type: 'number',
              description: 'Quantity ID'
            },
            price: {
              type: 'number',
              description: 'Price'
            },
            brandId: {
              type: 'number',
              description: 'Brand ID'
            },
            date: {
              type: 'string',
              format: 'date',
              description: 'Date'
            },
            description: {
              type: 'string',
              description: 'Description'
            }
          },
          required: ['name']
        }
      },
      required: ['file', 'payload']
    }
  })
  @UseInterceptors(FileInterceptor('file'))
  @Post('create')
  async createProduct(@UploadedFile() file: Express.Multer.File,
    @Body() payload: createProductDto // Thay thế bằng DTO chính xác của bạn
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const bucketName = 'product';
    const objectName = file.originalname;
    const url = await this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg');

    return this.ProductService.createProduct(payload, url);
  }


  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('list-all')
  async listAllProduct(@Query() payload: listAllProductDto) {
    return this.ProductService.listAllProduct(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('detail')
  async getDetailProduct(@Query() payload: getDetailProductDto) {
    return this.ProductService.getDetailProduct(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'update',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'File to upload'
        },
        payload: {
          type: 'object',
          properties: {
            id: {
              type: 'number',
              description: 'id'
            },
            name: {
              type: 'string',
              description: 'Name'
            },
            discount: {
              type: 'number',
              description: 'Discount'
            },
            categoryId: {
              type: 'number',
              description: 'Category ID'
            },
            typeId: {
              type: 'number',
              description: 'Type ID'
            },
            quantityId: {
              type: 'number',
              description: 'Quantity ID'
            },
            price: {
              type: 'number',
              description: 'Price'
            },
            brandId: {
              type: 'number',
              description: 'Brand ID'
            },
            date: {
              type: 'string',
              format: 'date',
              description: 'Date'
            },
            description: {
              type: 'string',
              description: 'Description'
            },
            status: {
              type: 'string',
              description: 'Description'
            }
          },
          required: ['name']
        }
      },
      required: ['file', 'payload']
    }
  })
  @UseInterceptors(FileInterceptor('file'))
  @Post('update')
  async updateProduct(@UploadedFile() file: Express.Multer.File,
    @Body() payload: updateProductDto // Thay thế bằng DTO chính xác của bạn
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const bucketName = 'product';
    const objectName = file.originalname;
    const url = await this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg');

    return this.ProductService.updateProduct(payload, url);
  }
  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('delete')
  async deleteProduct(@Query() payload: getDetailProductDto) {
    return this.ProductService.deleteProduct(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('filter')
  async filterProduct(@Query() payload: filterProductDto) {
    return this.ProductService.filterProduct(payload);
  }
}
