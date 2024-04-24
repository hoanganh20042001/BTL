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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const news_repository_1 = require("../dao/news.repository");
const like_repository_1 = require("../dao/like.repository");
let NewsService = class NewsService {
    constructor(newsRepository, likeRepository) {
        this.newsRepository = newsRepository;
        this.likeRepository = likeRepository;
    }
    async createNews(input) {
        try {
            const newNews = this.newsRepository.create(input);
            return await newNews.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async addLike(input) {
        try {
            const newLike = this.likeRepository.create(input);
            const findNewsById = await this.newsRepository.findOne(input.newsId);
            if (!findNewsById) {
                throw new common_1.BadRequestException("News_is_not_exist");
            }
            findNewsById.liked = findNewsById.liked + 1;
            findNewsById.save();
            return await newLike.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async addView(input) {
        try {
            const findNewsById = await this.newsRepository.findOne(input.newsId);
            if (!findNewsById) {
                throw new common_1.BadRequestException("News_is_not_exist");
            }
            findNewsById.view = findNewsById.view + 1;
            return await findNewsById.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listAllNews(payload) {
        const { search, limit, page } = payload;
        const listNews = this.newsRepository
            .createQueryBuilder('b')
            .select('b.*')
            .orderBy('b.id', 'ASC')
            .limit(limit)
            .offset(limit * (page - 1));
        if (search) {
            listNews.andWhere('( b.name LIKE :search OR b.description LIKE :search )', { search: `%${search}%` });
        }
        try {
            const [list, count] = await Promise.all([
                listNews.getRawMany(),
                listNews.getCount()
            ]);
            return { list, count };
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailNews(payload) {
        const { NewsId } = payload;
        const News = await this.newsRepository.findOne(NewsId);
        return News;
    }
    async updateNews(payload) {
        const findNewsById = await this.newsRepository.findOne(payload.newsId);
        if (!findNewsById) {
            throw new common_1.BadRequestException("News_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findNewsById), payload);
        return await this.newsRepository.save(updatedItem);
    }
    async deleteNews(payload) {
        const { NewsId } = payload;
        const News = await this.newsRepository.findOne(NewsId);
        if (!News) {
            throw new common_1.BadRequestException("News_is_not_exist");
        }
        await this.newsRepository.remove(News);
        return { status: 200, message: 'Xóa thành công!' };
    }
};
NewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [news_repository_1.NewsRepository,
        like_repository_1.LikeRepository])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map