import { filterProductDto, getDetailProductDto, listAllProductDto } from './dto/list-all-product-dto.dto';
import { createProductDto, updateProductDto } from './dto/product-dto.dto';
import { ProductRepository } from './product.repository';
import { BrandRepository } from 'src/brand/brand.repository';
import { TypeRepository } from 'src/type/type.repository';
import { CategoryRepository } from 'src/category/category.repository';
export declare class ProductService {
    private readonly productRepository;
    private readonly brandRepository;
    private readonly typeRepository;
    private readonly categoryRepository;
    constructor(productRepository: ProductRepository, brandRepository: BrandRepository, typeRepository: TypeRepository, categoryRepository: CategoryRepository);
    createProduct(input: createProductDto, url: string): Promise<import("../databases/entities/product.entity").Product>;
    listAllProduct(payload: listAllProductDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailProduct(payload: getDetailProductDto): Promise<any>;
    updateProduct(payload: updateProductDto, url: string): Promise<import("../databases/entities/product.entity").Product>;
    deleteProduct(payload: getDetailProductDto): Promise<{
        status: number;
        message: string;
    }>;
    filterProduct(payload: filterProductDto): Promise<{
        list: any[];
        count: number;
    }>;
}
