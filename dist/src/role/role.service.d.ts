import { getDetailRoleDto, listAllRoleDto } from './dto/list-all-role-dto.dto';
import { createRoleDto, updateRoleDto } from './dto/role-dto.dto';
import { RoleRepository } from './role.repository';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: RoleRepository);
    createRole(input: createRoleDto): Promise<import("../databases/entities/role.entity").Role>;
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
