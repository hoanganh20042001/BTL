import { getDetailUserDto, listAllUserDto } from './dto/list-all-user-dto.dto';
import { updateUserDto } from './dto/user-dto.dto';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    listAllClient(payload: listAllUserDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailUser(payload: getDetailUserDto): Promise<import("../databases/entities/user.entity").User>;
    updateUser(payload: updateUserDto): Promise<{
        UserId: number;
        fullName: string;
        phoneNumber: string;
        id: number;
        userName: string;
        passWord: string;
        roleId: number;
        email: string;
        addressId: number;
        isActive: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/user.entity").User>;
    deleteUser(payload: getDetailUserDto): Promise<{
        status: number;
        message: string;
    }>;
}
