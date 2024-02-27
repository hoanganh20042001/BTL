import { getDetailNewsDto, listAllNewsDto } from './dto/list-all-news-dto.dto';
import { addLikeDto, addViewDto, createNewsDto, updateNewsDto } from './dto/news-dto.dto';
import { NewsService } from './news.service';
export declare class NewsController {
    private readonly NewsService;
    constructor(NewsService: NewsService);
    createNews(payload: createNewsDto): Promise<import("../databases/entities/news.entity").News>;
    addLike(payload: addLikeDto): Promise<import("../databases/entities/like.entity").Like>;
    addView(payload: addViewDto): Promise<import("../databases/entities/news.entity").News>;
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
