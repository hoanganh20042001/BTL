import { getCostDto, getDetailPayDto, listAllPayDto, listPayByStatusDto, listPayByUserIdDto } from './dto/list-all-pay-dto.dto';
import { createPayDto, updatePayDto, updateStatusPayDto } from './dto/pay-dto.dto';
import { PayService } from './pay.service';
export declare class PayController {
    private readonly payService;
    constructor(payService: PayService);
    createPay(payload: createPayDto): Promise<import("../databases/entities/pay.entity").Pay>;
    listAllPay(payload: listAllPayDto): Promise<any[]>;
    listPayByUserId(payload: listPayByUserIdDto): Promise<any[]>;
    getCost(payload: getCostDto): Promise<number>;
    listPayByStatus(payload: listPayByStatusDto): Promise<any[]>;
    getDetailPay(payload: getDetailPayDto): Promise<any[]>;
    updatePay(payload: updatePayDto): Promise<{
        PayId: number;
        accountNumber: string;
        bankName: string;
        id: number;
        date: Date;
        cost: number;
        discountId: number;
        userId: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/pay.entity").Pay>;
    updateStatusPay(payload: updateStatusPayDto): Promise<{
        PayId: number;
        status: string;
        id: number;
        accountNumber: string;
        date: Date;
        cost: number;
        discountId: number;
        userId: number;
        bankName: string;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/pay.entity").Pay>;
    deletePay(payload: getDetailPayDto): Promise<{
        status: number;
        message: string;
    }>;
}
