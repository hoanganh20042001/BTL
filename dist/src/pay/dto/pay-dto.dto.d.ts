export declare class orderItemDto {
    orderId: number;
}
export declare class createPayDto {
    accountNumber: string;
    date: Date;
    bankName: string;
    discountId: number;
    status: string;
    orderItems: orderItemDto[];
}
export declare class updatePayDto {
    PayId: number;
    accountNumber: string;
    bankName: string;
}
export declare class updateStatusPayDto {
    PayId: number;
    status: string;
}
