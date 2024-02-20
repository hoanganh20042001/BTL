import { Global, HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from 'src/role/role.repository';
import { UserRepository } from 'src/user/user.repository';
import { UserTokenRepository } from 'src/user-token/user-token.repository';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JsonWebTokenStrategy } from './strategies/jwt.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { LocalStrategy } from './strategies/local.strategy';
require('dotenv').config();
@Global()
@Module({
  imports: [
    // UsersModule,
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
