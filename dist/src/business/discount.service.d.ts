import { getDetailDiscountDto, listAllDiscountDto } from '../dto/discount/list-all-discount-dto.dto';
import { createDiscountDto, updateDiscountDto } from '../dto/discount/discount-dto.dto';
import { DiscountRepository } from '../dao/discount.repository';
export declare class DiscountService {
    private readonly discountRepository;
    constructor(discountRepository: DiscountRepository);
    createDiscount(input: createDiscountDto): Promise<import("../databases/entities/discount.entity").Discount>;
    listAllDiscount(payload: listAllDiscountDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailDiscount(payload: getDetailDiscountDto): Promise<import("../databases/entities/discount.entity").Discount>;
    updateDiscount(payload: updateDiscountDto): Promise<{
        DiscountId: number;
        name: string;
        value: number;
        description: string;
        id: number;
        isActive: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/discount.entity").Discount>;
    deleteDiscount(payload: getDetailDiscountDto): Promise<{
        status: number;
        message: string;
    }>;
}
