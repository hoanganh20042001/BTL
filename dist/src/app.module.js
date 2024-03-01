"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const orm_1 = require("./orm");
const role_module_1 = require("../src/module/role.module");
const mail_module_1 = require("./mail/mail.module");
const backup_module_1 = require("./backup/backup.module");
const minio_module_1 = require("./minio/minio.module");
const config_1 = require("@nestjs/config");
const backup_config_1 = require("./config/backup.config");
const mongo_module_1 = require("./mongo/mongo.module");
const mail_config_1 = __importDefault(require("./config/mail.config"));
const category_module_1 = require("./module/category.module");
const brand_module_1 = require("./module/brand.module");
const user_module_1 = require("./module/user.module");
const product_module_1 = require("./module/product.module");
const news_module_1 = require("./module/news.module");
const discount_module_1 = require("./module/discount.module");
const type_module_1 = require("./module/type.module");
const order_module_1 = require("./module/order.module");
const pay_module_1 = require("./module/pay.module");
const review_module_1 = require("./module/review.module");
const auth_module_1 = require("./module/auth.module");
const address_module_1 = require("./module/address.module");
const user_token_module_1 = require("./module/user-token.module");
require('dotenv').config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env'],
                load: [mail_config_1.default, backup_config_1.getBackupConfig],
                cache: true,
            }),
            orm_1.OrmModule,
            user_module_1.UserModule,
            user_token_module_1.UserTokenModule,
            role_module_1.RoleModule,
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            news_module_1.NewsModule,
            discount_module_1.DiscountModule,
            type_module_1.TypeModule,
            mail_module_1.MailModule,
            brand_module_1.BrandModule,
            order_module_1.OrderModule,
            pay_module_1.PayModule,
            review_module_1.ReviewModule,
            address_module_1.AddressModule,
            backup_module_1.BackupModule,
            minio_module_1.MinioModule,
            mongo_module_1.MongoModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map