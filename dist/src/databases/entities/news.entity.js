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
exports.News = void 0;
const typeorm_1 = require("typeorm");
let News = class News extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], News.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', nullable: true }),
    __metadata("design:type", String)
], News.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'newDate', nullable: true }),
    __metadata("design:type", Date)
], News.prototype, "newDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'view', nullable: true }),
    __metadata("design:type", Number)
], News.prototype, "view", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'liked', nullable: true }),
    __metadata("design:type", Number)
], News.prototype, "liked", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'content', nullable: true }),
    __metadata("design:type", String)
], News.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", Date)
], News.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", Date)
], News.prototype, "updatedAt", void 0);
News = __decorate([
    (0, typeorm_1.Entity)('news')
], News);
exports.News = News;
//# sourceMappingURL=news.entity.js.map