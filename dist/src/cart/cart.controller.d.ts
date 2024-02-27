import { getDetailCartDto, listAllCartDto } from './dto/list-all-cart-dto.dto';
import { createCartDto, updateCartDto } from './dto/cart-dto.dto';
import { CartService } from './cart.service';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    createCart(payload: createCartDto): Promise<import("../databases/entities/cart.entity").Cart>;
    listAllCart(payload: listAllCartDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailCart(payload: getDetailCartDto): Promise<import("typeorm").SelectQueryBuilder<import("../databases/entities/cart.entity").Cart>>;
    updateCart(payload: updateCartDto): Promise<{
        CartId: number;
        quantity: number;
        date: Date;
        id: number;
        productId: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/cart.entity").Cart>;
    deleteCart(payload: getDetailCartDto): Promise<{
        status: number;
        message: string;
    }>;
}
