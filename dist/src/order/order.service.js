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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_repository_1 = require("./order.repository");
let OrderService = class OrderService {
    constructor(OrderRepository) {
        this.OrderRepository = OrderRepository;
    }
    async createOrder(input) {
        try {
            const newOrder = this.OrderRepository.create(input);
            return await newOrder.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllOrder(payload) {
        const { search, userId } = payload;
        const listOrder = this.OrderRepository
            .createQueryBuilder('o')
            .select(['o.*',
            'p.name as product'
        ])
            .leftJoin('product', 'p', 'o.productId=p.id')
            .where('o.userId = :userId', { userId: payload.userId });
        if (search) {
            listOrder.andWhere('( p.name LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listOrder.getRawMany(),
                listOrder.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailOrder(payload) {
        const { OrderId } = payload;
        const Order = await this.OrderRepository.findOne(OrderId);
        return Order;
    }
    async updateOrder(payload) {
        const findOrderById = await this.OrderRepository.findOne(payload.OrderId);
        if (!findOrderById) {
            throw new common_1.BadRequestException("Order_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findOrderById), payload);
        return await this.OrderRepository.save(updatedItem);
    }
    async pay(payload) {
        const findOrderById = await this.OrderRepository.findOne(payload.OrderId);
        if (!findOrderById) {
            throw new common_1.BadRequestException("Order_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findOrderById), payload);
        return await this.OrderRepository.save(updatedItem);
    }
    async deleteOrder(payload) {
        const { OrderId } = payload;
        const Order = await this.OrderRepository.findOne(OrderId);
        if (!Order) {
            throw new common_1.BadRequestException("Order_is_not_exist");
        }
        await this.OrderRepository.remove(Order);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map