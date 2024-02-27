"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_controller_1 = require("./product.controller");
const product_repository_1 = require("./product.repository");
const product_service_1 = require("./product.service");
const brand_repository_1 = require("../brand/brand.repository");
const category_repository_1 = require("../category/category.repository");
const type_repository_1 = require("../type/type.repository");
const minio_service_1 = require("../minio/minio.service");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                product_repository_1.ProductRepository,
                brand_repository_1.BrandRepository,
                type_repository_1.TypeRepository,
                category_repository_1.CategoryRepository,
            ])],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService,
            minio_service_1.MinioService,
        ]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map