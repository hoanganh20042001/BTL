import { getDetailUserDto, listAllUserDto } from '../dto/user/list-all-user-dto.dto';
import { updateUserDto } from '../dto/user/user-dto.dto';
import { UserRepository } from '../dao/user.repository';
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
        email: string;
        password: string;
        id: number;
        userName: string;
        passWord: string;
        code: string;
        forgetPassCode: string;
        roleId: number;
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
