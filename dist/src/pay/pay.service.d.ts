import { getCostDto, getDetailPayDto, listAllPayDto, listPayByStatusDto, listPayByUserIdDto } from './dto/list-all-pay-dto.dto';
import { createPayDto, updatePayDto, updateStatusPayDto } from './dto/pay-dto.dto';
import { PayRepository } from './pay.repository';
import { OrderRepository } from 'src/order/order.repository';
import { ProductRepository } from 'src/product/product.repository';
import { DiscountRepository } from 'src/discount/discount.repository';
import { MailService } from 'src/mail/mail.service';
import { UserRepository } from 'src/user/user.repository';
export declare class PayService {
    private readonly payRepository;
    private readonly orderRepository;
    private readonly productRepository;
    private readonly discountRepository;
    private readonly userRepository;
    private readonly mailService;
    constructor(payRepository: PayRepository, orderRepository: OrderRepository, productRepository: ProductRepository, discountRepository: DiscountRepository, userRepository: UserRepository, mailService: MailService);
    createPay(input: createPayDto): Promise<import("../databases/entities/pay.entity").Pay>;
    listAllPay(payload: listAllPayDto): Promise<any[]>;
    listPayByUserId(payload: listPayByUserIdDto): Promise<any[]>;
    listPayByStatus(payload: listPayByStatusDto): Promise<any[]>;
    getDetailPay(payload: getDetailPayDto): Promise<any[]>;
    getCost(payload: getCostDto): Promise<number>;
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
