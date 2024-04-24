import { Injectable } from '@nestjs/common';
import { Type } from 'src/databases/entities/type.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Type)
export class TypeRepository extends Repository<Type> { }
