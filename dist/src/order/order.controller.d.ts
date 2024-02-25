import { getDetailOrderDto, listAllOrderDto } from './dto/list-all-order-dto.dto';
import { createOrderDto, updateOrderDto } from './dto/order-dto.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(payload: createOrderDto): Promise<import("../databases/entities/order.entity").Order>;
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
