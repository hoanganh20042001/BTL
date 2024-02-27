import { getDetailBrandDto, listAllBrandDto } from './dto/list-all-brand-dto.dto';
import { createBrandDto, updateBrandDto } from './dto/brand-dto.dto';
import { BrandRepository } from './brand.repository';
export declare class BrandService {
    private readonly brandRepository;
    constructor(brandRepository: BrandRepository);
    createBrand(input: createBrandDto): Promise<import("../databases/entities/brand.entity").Brand>;
    listAllBrand(payload: listAllBrandDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailBrand(payload: getDetailBrandDto): Promise<import("../databases/entities/brand.entity").Brand>;
    updateBrand(payload: updateBrandDto): Promise<{
        BrandId: number;
        name: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/brand.entity").Brand>;
    deleteBrand(payload: getDetailBrandDto): Promise<{
        status: number;
        message: string;
    }>;
}
