import { getDetailNewsDto, listAllNewsDto } from './dto/list-all-news-dto.dto';
import { addLikeDto, addViewDto, createNewsDto, updateNewsDto } from './dto/news-dto.dto';
import { NewsRepository } from './news.repository';
import { LikeRepository } from './like.repository';
export declare class NewsService {
    private readonly newsRepository;
    private readonly likeRepository;
    constructor(newsRepository: NewsRepository, likeRepository: LikeRepository);
    createNews(input: createNewsDto): Promise<import("../databases/entities/news.entity").News>;
    addLike(input: addLikeDto): Promise<import("../databases/entities/like.entity").Like>;
    addView(input: addViewDto): Promise<import("../databases/entities/news.entity").News>;
    listAllNews(payload: listAllNewsDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailNews(payload: getDetailNewsDto): Promise<import("../databases/entities/news.entity").News>;
    updateNews(payload: updateNewsDto): Promise<{
        newsId: number;
        title: string;
        newDate: Date;
        content: string;
        id: number;
        view: number;
        liked: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/news.entity").News>;
    deleteNews(payload: getDetailNewsDto): Promise<{
        status: number;
        message: string;
    }>;
}
