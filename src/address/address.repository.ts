import { Injectable } from '@nestjs/common';
import { Address } from 'src/databases/entities/address.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Address)
export class AddressRepository extends Repository<Address> { }
