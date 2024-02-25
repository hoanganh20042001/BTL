export declare class createProductDto {
    name: string;
    image: string;
    discount: number;
    categoryId: number;
    typeId: number;
    quantity: number;
    price: number;
    status: string;
    brandId: number;
    sold: number;
    date: Date;
    description: string;
}
export declare class updateProductDto {
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
}
