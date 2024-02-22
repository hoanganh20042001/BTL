import { getDetailProductDto, listAllProductDto } from './dto/list-all-product-dto.dto';
import { createProductDto, updateProductDto } from './dto/product-dto.dto';
import { ProductRepository } from './product.repository';
export declare class ProductService {
    private readonly ProductRepository;
    constructor(ProductRepository: ProductRepository);
    createProduct(input: createProductDto): Promise<import("../databases/entities/product.entity").Product>;
    listAllProduct(payload: listAllProductDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailProduct(payload: getDetailProductDto): Promise<import("../databases/entities/product.entity").Product>;
    updateProduct(payload: updateProductDto): Promise<{
        ProductId: number;
        name: string;
        image: string;
        discount: number;
        categoryId: number;
        typeId: number;
        quantity: number;
        price: number;
        status: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/product.entity").Product>;
    deleteProduct(payload: getDetailProductDto): Promise<{
        status: number;
        message: string;
    }>;
}
