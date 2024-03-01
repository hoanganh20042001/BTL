import { getDetailRoleDto, listAllRoleDto } from '../dto/role/list-all-role-dto.dto';
import { createRoleDto, updateRoleDto } from '../dto/role/role-dto.dto';
import { RoleService } from '../business/role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    createRole(payload: createRoleDto): Promise<import("../databases/entities/role.entity").Role>;
    listAllRole(payload: listAllRoleDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailRole(payload: getDetailRoleDto): Promise<import("../databases/entities/role.entity").Role>;
    updateRole(payload: updateRoleDto): Promise<{
        roleId: number;
        name: string;
        description: string;
        id: number;
        isActive: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/role.entity").Role>;
    deleteRole(payload: getDetailRoleDto): Promise<{
        status: number;
        message: string;
    }>;
}
