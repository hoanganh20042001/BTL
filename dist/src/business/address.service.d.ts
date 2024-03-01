import { getDetailAddressDto, listAllAddressDto } from '../dto/address/list-all-address-dto.dto';
import { createAddressDto, updateAddressDto } from '../dto/address/address-dto.dto';
import { AddressRepository } from '../dao/address.repository';
export declare class AddressService {
    private readonly addressRepository;
    constructor(addressRepository: AddressRepository);
    createAddress(input: createAddressDto): Promise<import("../databases/entities/address.entity").Address>;
    listAllAddress(payload: listAllAddressDto): Promise<{
        list: any[];
        count: number;
    }>;
    getDetailAddress(payload: getDetailAddressDto): Promise<import("../databases/entities/address.entity").Address>;
    updateAddress(payload: updateAddressDto): Promise<{
        AddressId: number;
        name: string;
        note: string;
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("../databases/entities/address.entity").Address>;
    deleteAddress(payload: getDetailAddressDto): Promise<{
        status: number;
        message: string;
    }>;
}
