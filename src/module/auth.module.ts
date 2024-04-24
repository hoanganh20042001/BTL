import { Global, HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MailModule } from 'src/mail/mail.module';
import { RoleRepository } from 'src/dao/role.repository';
import { LocalStrategy } from 'src/dto/auth/strategies/local.strategy';
import { UserRepository } from 'src/dao/user.repository';
import { AuthService } from 'src/business/auth.service';
import { JsonWebTokenStrategy } from 'src/dto/auth/strategies/jwt.strategy';
import { JwtRefreshStrategy } from 'src/dto/auth/strategies/jwt-refresh.strategy';
import { AuthController } from 'src/service /auth.controller';
import { UserTokenRepository } from 'src/dao/user-token.repository';
require('dotenv').config();
@Global()
@Module({
  imports: [
    MailModule,
    TypeOrmModule.forFeature([
      UserTokenRepository,
      UserRepository,
      RoleRepository
    ]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: process.env.JWT_EXPIRED_TOKEN_AFTER }
    }),
    ConfigModule,
  ],
  providers: [
    {
      provide: AuthService,
      useClass: AuthService
    },
    LocalStrategy,
    JsonWebTokenStrategy,
    JwtRefreshStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule { }
