import { getDetailTypeDto, listAllTypeDto } from '../dto/type/list-all-type-dto.dto';
import { createTypeDto, updateTypeDto } from '../dto/type/type-dto.dto';
import { TypeService } from '../business/type.service';
export declare class TypeController {
    private readonly TypeService;
    constructor(TypeService: TypeService);
    createType(payload: createTypeDto): Promise<import("../databases/entities/type.entity").Type>;
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
