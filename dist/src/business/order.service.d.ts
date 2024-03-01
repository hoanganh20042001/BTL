import { getDetailOrderDto, listAllOrderDto } from '../dto/order/list-all-order-dto.dto';
import { createOrderDto, payInOrderDto, updateOrderDto } from '../dto/order/order-dto.dto';
import { OrderRepository } from '../dao/order.repository';
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
        quantity: number;
        id: number;
        productId: number;
        userId: number;
        payId: number;
        status: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/order.entity").Order>;
    pay(payload: payInOrderDto): Promise<{
        OrderId: number;
        payId: number;
        id: number;
        productId: number;
        quantity: number;
        userId: number;
        status: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/order.entity").Order>;
    deleteOrder(payload: getDetailOrderDto): Promise<{
        status: number;
        message: string;
    }>;
}
