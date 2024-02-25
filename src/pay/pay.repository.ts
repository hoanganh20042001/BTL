import { Injectable } from '@nestjs/common';
import { Pay } from 'src/databases/entities/pay.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Pay)
export class PayRepository extends Repository<Pay> { }
