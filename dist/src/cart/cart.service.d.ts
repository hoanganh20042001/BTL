import { getDetailCartDto, listAllCartDto } from './dto/list-all-cart-dto.dto';
import { createCartDto, updateCartDto } from './dto/cart-dto.dto';
import { CartRepository } from './cart.repository';
import { ProductRepository } from 'src/product/product.repository';
import { UserRepository } from 'src/user/user.repository';
export declare class CartService {
    private readonly cartRepository;
    private readonly productRepository;
    private readonly userRepository;
    constructor(cartRepository: CartRepository, productRepository: ProductRepository, userRepository: UserRepository);
    createCart(input: createCartDto): Promise<import("../databases/entities/cart.entity").Cart>;
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
