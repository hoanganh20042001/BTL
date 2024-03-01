import { Injectable } from '@nestjs/common';
import { Like } from 'src/databases/entities/like.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Like)
export class LikeRepository extends Repository<Like> { }
