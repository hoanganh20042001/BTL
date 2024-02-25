import { getDetailOrderDto, listAllOrderDto } from './dto/list-all-order-dto.dto';
import { createOrderDto, updateOrderDto } from './dto/order-dto.dto';
import { OrderRepository } from './order.repository';
export declare class OrderService {
    private readonly OrderRepository;
    constructor(OrderRepository: OrderRepository);
    createOrder(input: createOrderDto): Promise<import("../databases/entities/order.entity").Order>;
    listAllOrder(payload: listAllOrderDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailOrder(payload: getDetailOrderDto): Promise<import("../databases/entities/order.entity").Order>;
    updateOrder(payload: updateOrderDto): Promise<{
        OrderId: number;
        productId: number;
        quantity: number;
        userId: number;
        payId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/order.entity").Order>;
    deleteOrder(payload: getDetailOrderDto): Promise<{
        status: number;
        message: string;
    }>;
}
