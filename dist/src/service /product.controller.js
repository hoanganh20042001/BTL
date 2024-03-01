"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../dto/auth/guards/auth.guard");
const list_all_product_dto_dto_1 = require("../dto/product/list-all-product-dto.dto");
const product_dto_dto_1 = require("../dto/product/product-dto.dto");
const product_service_1 = require("../business/product.service");
const minio_service_1 = require("../minio/minio.service");
const platform_express_1 = require("@nestjs/platform-express");
let ProductController = class ProductController {
    constructor(ProductService, minioService) {
        this.ProductService = ProductService;
        this.minioService = minioService;
    }
    async uploadFile(file) {
        const bucketName = 'test';
        const objectName = file.originalname;
        const url = await this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg');
        return { url };
    }
    async createProduct(file, payload) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        const bucketName = 'product';
        const objectName = file.originalname;
        const url = await this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg');
        return this.ProductService.createProduct(payload, url);
    }
    async listAllProduct(payload) {
        return this.ProductService.listAllProduct(payload);
    }
    async getDetailProduct(payload) {
        return this.ProductService.getDetailProduct(payload);
    }
    async updateProduct(file, payload) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        const bucketName = 'product';
        const objectName = file.originalname;
        const url = await this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg');
        return this.ProductService.updateProduct(payload, url);
    }
    async deleteProduct(payload) {
        return this.ProductService.deleteProduct(payload);
    }
    async filterProduct(payload) {
        return this.ProductService.filterProduct(payload);
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload file' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
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
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
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
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_dto_1.createProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('list-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_product_dto_dto_1.listAllProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "listAllProduct", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_product_dto_dto_1.getDetailProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getDetailProduct", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
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
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_dto_1.updateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_product_dto_dto_1.getDetailProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_all_product_dto_dto_1.filterProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "filterProduct", null);
ProductController = __decorate([
    (0, swagger_1.ApiTags)('product'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        minio_service_1.MinioService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map