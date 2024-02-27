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
exports.PayService = void 0;
const common_1 = require("@nestjs/common");
const pay_repository_1 = require("./pay.repository");
const order_repository_1 = require("../order/order.repository");
const product_repository_1 = require("../product/product.repository");
const discount_repository_1 = require("../discount/discount.repository");
const mail_service_1 = require("../mail/mail.service");
const constants_1 = require("../constants");
const user_repository_1 = require("../user/user.repository");
let PayService = class PayService {
    constructor(payRepository, orderRepository, productRepository, discountRepository, userRepository, mailService) {
        this.payRepository = payRepository;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.discountRepository = discountRepository;
        this.userRepository = userRepository;
        this.mailService = mailService;
    }
    async createPay(input) {
        try {
            const newPay = this.payRepository.create(input);
            let cost = 0;
            await newPay.save();
            await Promise.all(input.orderItems.map(async (orderItem) => {
                const order = await this.orderRepository.findOne({ id: orderItem.orderId });
                const product = await this.productRepository.findOne({ id: order.productId });
                if (order) {
                    order.payId = newPay.id;
                    await order.save();
                    product.quantity = product.quantity - order.quantity;
                    product.sold = product.sold + order.quantity;
                    cost = cost + product.discountedPrice;
                    await product.save();
                }
                else {
                    throw new common_1.NotFoundException(`Order with ID ${orderItem.orderId} not found`);
                }
            }));
            const discount = this.discountRepository.findOne({ id: input.discountId });
            cost = cost + (await discount).value;
            newPay.cost = cost;
            await newPay.save();
            return newPay;
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllPay(payload) {
        const { search } = payload;
        let listPay = await this.payRepository
            .createQueryBuilder('p')
            .select(['p.*'])
            .orderBy('p.date', 'ASC')
            .getRawMany();
        if (search) {
            listPay = listPay.filter(item => (item.name.includes(search) || item.description.includes(search)));
        }
        try {
            const transformedListPay = await Promise.all(listPay.map(async (item) => {
                const order = await this.orderRepository
                    .createQueryBuilder('o')
                    .select(['o.*', 'p.name as product', 'p.discount as discount'])
                    .leftJoin('product', 'p', 'p.id=o.productId')
                    .where('o.payId = :payId', { payId: item.id })
                    .getRawMany();
                return Object.assign(Object.assign({}, item), { order: order });
            }));
            return transformedListPay;
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listPayByUserId(payload) {
        const { userId, search } = payload;
        let listPay = await this.payRepository
            .createQueryBuilder('p')
            .select(['p.*'])
            .where('p.userId = :userId', { userId: payload.userId })
            .orderBy('p.date', 'ASC')
            .getRawMany();
        if (search) {
            listPay = listPay.filter(item => (item.name.includes(search) || item.description.includes(search)));
        }
        try {
            const transformedListPay = await Promise.all(listPay.map(async (item) => {
                const order = await this.orderRepository
                    .createQueryBuilder('o')
                    .select(['o.*', 'p.name as product', 'p.discount as discount'])
                    .leftJoin('product', 'p', 'p.id=o.productId')
                    .where('o.payId = :payId', { payId: item.id })
                    .getRawMany();
                return Object.assign(Object.assign({}, item), { order: order });
            }));
            return transformedListPay;
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listPayByStatus(payload) {
        const { status } = payload;
        let listPay = await this.payRepository
            .createQueryBuilder('p')
            .select(['p.*'])
            .orderBy('p.date', 'ASC')
            .getRawMany();
        try {
            const transformedListPay = await Promise.all(listPay.map(async (item) => {
                const order = await this.orderRepository
                    .createQueryBuilder('o')
                    .select(['o.*', 'p.name as product', 'p.discount as discount'])
                    .leftJoin('product', 'p', 'p.id=o.productId')
                    .where('o.payId = :payId', { payId: item.id })
                    .getRawMany();
                return Object.assign(Object.assign({}, item), { order: order });
            }));
            return transformedListPay;
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailPay(payload) {
        const { PayId } = payload;
        const Pay = this.productRepository
            .createQueryBuilder('p')
            .select(['p.*',
            'o.quantity as quantity',
            'p.name as product',
            'p.price as price',
            'p.discountedProduct as dicountedProduct',
            'p.discount as discount'
        ])
            .leftJoin('order', 'o', 'o.payId=p.id')
            .where('o.payId = :payId', { payId: payload.PayId })
            .getRawMany();
        return Pay;
    }
    async getCost(payload) {
        const { discountId, orderItems } = payload;
        let cost = 0;
        await Promise.all(payload.orderItems.map(async (orderItem) => {
            const order = await this.orderRepository.findOne({ id: orderItem.orderId });
            const product = await this.productRepository.findOne({ id: order.productId });
            if (order) {
                cost = cost + product.discountedPrice;
            }
            else {
                throw new common_1.NotFoundException(`Order with ID ${orderItem.orderId} not found`);
            }
        }));
        const discount = this.discountRepository.findOne({ id: payload.discountId });
        cost = cost - (await discount).value;
        return cost;
    }
    async updatePay(payload) {
        const findPayById = await this.payRepository.findOne(payload.PayId);
        if (!findPayById) {
            throw new common_1.BadRequestException("Pay_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findPayById), payload);
        return await this.payRepository.save(updatedItem);
    }
    async updateStatusPay(payload) {
        const findPayById = await this.payRepository.findOne(payload.PayId);
        if (!findPayById) {
            throw new common_1.BadRequestException("Pay_is_not_exist");
        }
        const findUser = await this.userRepository.findOne({ id: findPayById.userId });
        const discount = await this.discountRepository.findOne({ id: findPayById.discountId });
        const products = await this.productRepository
            .createQueryBuilder('p')
            .select([
            'o.quantity as quantity',
            'p.name as product',
            'p.price as price',
            'p.discountedPrice as discountedPrice',
            'p.discount as discount'
        ])
            .leftJoin('order', 'o', 'o.productId = p.id')
            .where('o.payId = :payId', { payId: payload.PayId })
            .getRawMany();
        if (payload.status === constants_1.PAY_STATUS.DTT) {
            await this.mailService.paymentSuccessful({
                emailTo: findUser.email,
                subject: 'Thanh toán hóa đơn thành công',
                name: findUser.fullName,
                cost: findPayById.cost,
                bankName: findPayById.bankName
            });
        }
        const updatedItem = Object.assign(Object.assign({}, findPayById), payload);
        return await this.payRepository.save(updatedItem);
    }
    async deletePay(payload) {
        const { PayId } = payload;
        const Pay = await this.payRepository.findOne(PayId);
        if (!Pay) {
            throw new common_1.BadRequestException("Pay_is_not_exist");
        }
        await this.payRepository.remove(Pay);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
PayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pay_repository_1.PayRepository,
        order_repository_1.OrderRepository,
        product_repository_1.ProductRepository,
        discount_repository_1.DiscountRepository,
        user_repository_1.UserRepository,
        mail_service_1.MailService])
], PayService);
exports.PayService = PayService;
//# sourceMappingURL=pay.service.js.map