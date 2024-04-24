import { orderItemDto } from "./pay-dto.dto";
export declare class listAllPayDto {
    search: string;
}
export declare class listPayByStatusDto {
    status: string;
}
export declare class getDetailPayDto {
    PayId: number;
}
export declare class listPayByUserIdDto {
    userId: number;
    search: string;
}
export declare class getCostDto {
    discountId: number;
    orderItems: orderItemDto[];
}
