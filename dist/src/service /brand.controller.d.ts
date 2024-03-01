import { getDetailBrandDto, listAllBrandDto } from '../dto/brand/list-all-brand-dto.dto';
import { createBrandDto, updateBrandDto } from '../dto/brand/brand-dto.dto';
import { BrandService } from '../business/brand.service';
export declare class BrandController {
    private readonly BrandService;
    constructor(BrandService: BrandService);
    createBrand(payload: createBrandDto): Promise<import("../databases/entities/brand.entity").Brand>;
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
