import { Module } from '@nestjs/common';

import { UserTokenController } from './user-token.controller';
import { UserTokenService } from './user-token.service';

@Module({
  providers: [UserTokenService],
  controllers: [UserTokenController]
})
export class UserTokenModule {}
