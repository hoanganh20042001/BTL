"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const account_module_1 = require("./account/account.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const example_module_1 = require("./example/example.module");
const orm_1 = require("./orm");
const role_module_1 = require("./role/role.module");
const user_module_1 = require("./user/user.module");
const user_token_module_1 = require("./user-token/user-token.module");
const category_module_1 = require("./category/category.module");
const upload_module_1 = require("./upload/upload.module");
const product_module_1 = require("./product/product.module");
const news_module_1 = require("./news/news.module");
const discount_module_1 = require("./discount/discount.module");
const type_module_1 = require("./type/type.module");
const mail_module_1 = require("./mail/mail.module");
const brand_module_1 = require("./brand/brand.module");
const cart_module_1 = require("./cart/cart.module");
const order_module_1 = require("./order/order.module");
const pay_module_1 = require("./pay/pay.module");
const review_module_1 = require("./review/review.module");
require('dotenv').config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            orm_1.OrmModule,
            example_module_1.ExampleModule,
            user_module_1.UserModule,
            user_token_module_1.UserTokenModule,
            role_module_1.RoleModule,
            auth_module_1.AuthModule,
            account_module_1.AccountModule,
            category_module_1.CategoryModule,
            upload_module_1.UploadsModule,
            product_module_1.ProductModule,
            news_module_1.NewsModule,
            discount_module_1.DiscountModule,
            type_module_1.TypeModule,
            mail_module_1.MailModule,
            brand_module_1.BrandModule,
            cart_module_1.CartModule,
            order_module_1.OrderModule,
            pay_module_1.PayModule,
            review_module_1.ReviewModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map