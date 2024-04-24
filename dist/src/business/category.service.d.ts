import { getDetailCategoryDto, listAllCategoryDto } from '../dto/category/list-all-category-dto.dto';
import { createCategoryDto, updateCategoryDto } from '../dto/category/category-dto.dto';
import { CategoryRepository } from '../dao/category.repository';
export declare class CategoryService {
    private readonly CategoryRepository;
    constructor(CategoryRepository: CategoryRepository);
    createCategory(input: createCategoryDto): Promise<import("../databases/entities/category.entity").Category>;
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
