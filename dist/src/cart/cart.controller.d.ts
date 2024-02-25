import { getDetailCartDto, listAllCartDto } from './dto/list-all-cart-dto.dto';
import { createCartDto, updateCartDto } from './dto/cart-dto.dto';
import { CartService } from './cart.service';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    createCart(payload: createCartDto): Promise<import("../databases/entities/cart.entity").Cart>;
    listAllCart(payload: listAllCartDto): Promise<{
        list: any;
        count: any;
    }>;
    getDetailCart(payload: getDetailCartDto): Promise<any>;
    updateCart(payload: updateCartDto): Promise<any>;
    deleteCart(payload: getDetailCartDto): Promise<{
        status: number;
        message: string;
    }>;
}
