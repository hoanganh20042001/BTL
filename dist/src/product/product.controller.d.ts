import { filterProductDto, getDetailProductDto, listAllProductDto } from './dto/list-all-product-dto.dto';
import { createProductDto, updateProductDto } from './dto/product-dto.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly ProductService;
    constructor(ProductService: ProductService);
    createProduct(payload: createProductDto): Promise<import("../databases/entities/product.entity").Product>;
    listAllProduct(payload: listAllProductDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailProduct(payload: getDetailProductDto): Promise<any>;
    updateProduct(payload: updateProductDto): Promise<{
        ProductId: number;
        name: string;
        image: string;
        discount: number;
        categoryId: number;
        typeId: number;
        brandId: number;
        quantity: number;
        price: number;
        status: string;
        date: Date;
        description: string;
        id: number;
        sold: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/product.entity").Product>;
    deleteProduct(payload: getDetailProductDto): Promise<{
        status: number;
        message: string;
    }>;
    filterProduct(payload: filterProductDto): Promise<{
        list: any[];
        count: number;
    }>;
}
