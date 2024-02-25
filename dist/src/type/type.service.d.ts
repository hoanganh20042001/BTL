import { getDetailTypeDto, listAllTypeDto } from './dto/list-all-type-dto.dto';
import { createTypeDto, updateTypeDto } from './dto/type-dto.dto';
import { TypeRepository } from './type.repository';
export declare class TypeService {
    private readonly typeRepository;
    constructor(typeRepository: TypeRepository);
    createType(input: createTypeDto): Promise<import("../databases/entities/type.entity").Type>;
    listAllType(payload: listAllTypeDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailType(payload: getDetailTypeDto): Promise<import("../databases/entities/type.entity").Type>;
    updateType(payload: updateTypeDto): Promise<{
        TypeId: number;
        name: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/type.entity").Type>;
    deleteType(payload: getDetailTypeDto): Promise<{
        status: number;
        message: string;
    }>;
}
