import { Module } from '@nestjs/common';
import { UserTokenService } from 'src/business/user-token.service';
import { UserTokenController } from 'src/service /user-token.controller';


@Module({
  providers: [UserTokenService],
  controllers: [UserTokenController]
})
export class UserTokenModule {}
