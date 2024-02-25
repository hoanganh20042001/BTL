import { getDetailPayDto, listAllPayDto } from './dto/list-all-pay-dto.dto';
import { createPayDto, updatePayDto } from './dto/pay-dto.dto';
import { PayService } from './pay.service';
export declare class PayController {
    private readonly payService;
    constructor(payService: PayService);
    createPay(payload: createPayDto): Promise<import("../databases/entities/pay.entity").Pay>;
    listAllPay(payload: listAllPayDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailPay(payload: getDetailPayDto): Promise<import("../databases/entities/pay.entity").Pay>;
    updatePay(payload: updatePayDto): Promise<{
        PayId: number;
        accountNumber: string;
        bankName: string;
        id: number;
        date: Date;
        cost: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/pay.entity").Pay>;
    deletePay(payload: getDetailPayDto): Promise<{
        status: number;
        message: string;
    }>;
}
