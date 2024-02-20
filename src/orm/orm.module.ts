import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
const entitiesPath = path.join(__dirname, '../../**/*.entity{.ts,.js}');
require('dotenv').config();

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : null,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [entitiesPath],
      synchronize: false,
      logging: true,
      timezone: 'Z'
    })
  ],
  exports: [TypeOrmModule]
})
export class OrmModule { }
