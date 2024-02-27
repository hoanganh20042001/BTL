/// <reference types="multer" />
import { filterProductDto, getDetailProductDto, listAllProductDto } from './dto/list-all-product-dto.dto';
import { createProductDto, updateProductDto } from './dto/product-dto.dto';
import { ProductService } from './product.service';
import { MinioService } from 'src/minio/minio.service';
export declare class ProductController {
    private readonly ProductService;
    private readonly minioService;
    constructor(ProductService: ProductService, minioService: MinioService);
    uploadFile(file: Express.Multer.File): Promise<{
        url: string;
    }>;
    createProduct(file: Express.Multer.File, payload: createProductDto): Promise<import("../databases/entities/product.entity").Product>;
    listAllProduct(payload: listAllProductDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailProduct(payload: getDetailProductDto): Promise<any>;
    updateProduct(file: Express.Multer.File, payload: updateProductDto): Promise<import("../databases/entities/product.entity").Product>;
    deleteProduct(payload: getDetailProductDto): Promise<{
        status: number;
        message: string;
    }>;
    filterProduct(payload: filterProductDto): Promise<{
        list: any[];
        count: number;
    }>;
}
