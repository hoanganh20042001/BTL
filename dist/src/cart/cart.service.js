"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const cart_repository_1 = require("./cart.repository");
const product_repository_1 = require("../product/product.repository");
const user_repository_1 = require("../user/user.repository");
let CartService = class CartService {
    constructor(cartRepository, productRepository, userRepository) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }
    async createCart(input) {
        const findProductById = await this.productRepository.findOne({ id: payload. });
        try {
            const newCart = this.cartRepository.create(input);
            return await newCart.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllCart(payload) {
        const { search, limit, page } = payload;
        const listCart = this.CartRepository
            .createQueryBuilder('b')
            .select('b.*')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listCart.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listCart.getRawMany(),
                listCart.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailCart(payload) {
        const { CartId } = payload;
        const Cart = await this.CartRepository.findOne(CartId);
        return Cart;
    }
    async updateCart(payload) {
        const findCartById = await this.CartRepository.findOne(payload.CartId);
        if (!findCartById) {
            throw new common_1.BadRequestException("Cart_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findCartById), payload);
        return await this.CartRepository.save(updatedItem);
    }
    async deleteCart(payload) {
        const { CartId } = payload;
        const Cart = await this.CartRepository.findOne(CartId);
        if (!Cart) {
            throw new common_1.BadRequestException("Cart_is_not_exist");
        }
        await this.CartRepository.remove(Cart);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_repository_1.CartRepository,
        product_repository_1.ProductRepository,
        user_repository_1.UserRepository])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map