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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("./product.repository");
let ProductService = class ProductService {
    constructor(ProductRepository) {
        this.ProductRepository = ProductRepository;
    }
    async createProduct(input) {
        try {
            const newProduct = this.ProductRepository.create(input);
            return await newProduct.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllProduct(payload) {
        const { search, limit, page } = payload;
        const listProduct = this.ProductRepository
            .createQueryBuilder('b')
            .select('b.*')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listProduct.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listProduct.getRawMany(),
                listProduct.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailProduct(payload) {
        const { ProductId } = payload;
        const Product = await this.ProductRepository.findOne(ProductId);
        return Product;
    }
    async updateProduct(payload) {
        const findProductById = await this.ProductRepository.findOne(payload.ProductId);
        if (!findProductById) {
            throw new common_1.BadRequestException("Product_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findProductById), payload);
        return await this.ProductRepository.save(updatedItem);
    }
    async deleteProduct(payload) {
        const { ProductId } = payload;
        const Product = await this.ProductRepository.findOne(ProductId);
        if (!Product) {
            throw new common_1.BadRequestException("Product_is_not_exist");
        }
        await this.ProductRepository.remove(Product);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map