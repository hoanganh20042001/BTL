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
const product_repository_1 = require("../dao/product.repository");
const category_repository_1 = require("../dao/category.repository");
const brand_repository_1 = require("../dao/brand.repository");
const type_repository_1 = require("../dao/type.repository");
let ProductService = class ProductService {
    constructor(productRepository, brandRepository, typeRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.brandRepository = brandRepository;
        this.typeRepository = typeRepository;
        this.categoryRepository = categoryRepository;
    }
    async createProduct(input, url) {
        try {
            const newProduct = this.productRepository.create(input);
            await newProduct.save();
            let discountedPrice = 0;
            if (newProduct.discount < 100) {
                discountedPrice = ((newProduct.discount + 100) * newProduct.price) / 100;
            }
            else {
                discountedPrice = newProduct.discount + newProduct.price;
            }
            newProduct.discountedPrice = discountedPrice;
            newProduct.image = url;
            return await newProduct.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllProduct(payload) {
        const { search, limit, page } = payload;
        const listProduct = this.productRepository
            .createQueryBuilder('b')
            .select(['b.*',
            't.name as type',
            'br.name as brand',
            'c.name as category'
        ])
            .leftJoin('type', 't', 'b.typeId = t.id')
            .leftJoin('brand', 'br', 'b.brandId = br.id')
            .leftJoin('category', 'c', 'b.categoryId = c.id')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listProduct.andWhere('( b.name LIKE :search OR b.description LIKE :search OR t.name LIKE :search OR br.name LIKE :search OR c.name LIKE :search )', { search: `%${search}%` });
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
        const Product = await this.productRepository
            .createQueryBuilder('b')
            .select(['b.*',
            't.name as type',
            'br.name as brand',
            'c.name as category'
        ])
            .leftJoin('type', 't', 'b.typeId = t.id')
            .leftJoin('brand', 'br', 'b.brandId = br.id')
            .leftJoin('category', 'c', 'b.categoryId = c.id')
            .where('b.id = :id', { id: ProductId }).getRawOne();
        return Product;
    }
    async updateProduct(payload, url) {
        const findProductById = await this.productRepository.findOne(payload.ProductId);
        if (!findProductById) {
            throw new common_1.BadRequestException("Product_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findProductById), payload);
        await this.productRepository.save(updatedItem);
        let discountedPrice = 0;
        if (findProductById.discount < 100) {
            discountedPrice = ((findProductById.discount + 100) * findProductById.price) / 100;
        }
        else {
            discountedPrice = findProductById.discount + findProductById.price;
        }
        findProductById.discountedPrice = discountedPrice;
        findProductById.image = url;
        return await findProductById.save();
    }
    async deleteProduct(payload) {
        const { ProductId } = payload;
        const Product = await this.productRepository.findOne(ProductId);
        if (!Product) {
            throw new common_1.BadRequestException("Product_is_not_exist");
        }
        await this.productRepository.remove(Product);
        return { status: 200, message: 'Xóa thành công!' };
    }
    async filterProduct(payload) {
        const findTypeByName = await this.typeRepository.findOne({ name: payload.type });
        const findBrandByName = await this.brandRepository.findOne({ name: payload.brand });
        const findCategoryByName = await this.categoryRepository.findOne({ name: payload.category });
        const listProduct = this.productRepository
            .createQueryBuilder('b')
            .select([
            'b.*',
            't.name as type',
            'br.name as brand',
            'c.name as category'
        ])
            .leftJoin('type', 't', 'b.typeId = t.id')
            .leftJoin('brand', 'br', 'b.brandId = br.id')
            .leftJoin('category', 'c', 'b.categoryId = c.id');
        if (findTypeByName) {
            listProduct.andWhere('b.typeId = :typeId', { typeId: findTypeByName.id });
        }
        if (findBrandByName) {
            listProduct.andWhere('b.brandId = :brandId', { brandId: findBrandByName.id });
        }
        if (findCategoryByName) {
            listProduct.andWhere('b.categoryId = :categoryId', { categoryId: findCategoryByName.id });
        }
        if ((payload.maxPrice !== undefined && payload.minPrice !== undefined) ||
            (payload.maxPrice !== undefined && payload.minPrice === undefined) ||
            (payload.maxPrice === undefined && payload.minPrice !== undefined)) {
            let condition = '';
            const params = {};
            if (payload.maxPrice !== undefined && payload.minPrice !== undefined) {
                condition = '(b.price <= :maxPrice AND b.price >= :minPrice)';
                params.maxPrice = payload.maxPrice;
                params.minPrice = payload.minPrice;
            }
            else if (payload.maxPrice !== undefined) {
                condition = 'b.price <= :maxPrice';
                params.maxPrice = payload.maxPrice;
            }
            else {
                condition = 'b.price >= :minPrice';
                params.minPrice = payload.minPrice;
            }
            listProduct.andWhere(condition, params);
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
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository,
        brand_repository_1.BrandRepository,
        type_repository_1.TypeRepository,
        category_repository_1.CategoryRepository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map