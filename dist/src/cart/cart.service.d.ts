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
    listAllCartByUserId(payload: listAllCartDto): Promise<{
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
