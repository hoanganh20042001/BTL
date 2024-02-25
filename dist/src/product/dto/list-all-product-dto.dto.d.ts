export declare class listAllProductDto {
    page: number;
    limit: number;
    search: string;
}
export declare class getDetailProductDto {
    ProductId: number;
}
export declare class filterProductDto {
    category: string;
    type: string;
    brand: string;
    minPrice: number;
    maxPrice: number;
}
