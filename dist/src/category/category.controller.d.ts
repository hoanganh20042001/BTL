import { getDetailCategoryDto, listAllCategoryDto } from './dto/list-all-category-dto.dto';
import { createCategoryDto, updateCategoryDto } from './dto/category-dto.dto';
import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly CategoryService;
    constructor(CategoryService: CategoryService);
    createCategory(payload: createCategoryDto): Promise<import("../databases/entities/category.entity").Category>;
    listAllCategory(payload: listAllCategoryDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailCategory(payload: getDetailCategoryDto): Promise<import("../databases/entities/category.entity").Category>;
    updateCategory(payload: updateCategoryDto): Promise<{
        categoryId: number;
        name: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/category.entity").Category>;
    deleteCategory(payload: getDetailCategoryDto): Promise<{
        status: number;
        message: string;
    }>;
}
