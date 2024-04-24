import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './orm';
import { RoleModule } from '../src/module/role.module';
import { MailModule } from './mail/mail.module';
import { BackupModule } from './backup/backup.module';
import { MinioModule } from './minio/minio.module';
import { ConfigModule } from '@nestjs/config';
import { getBackupConfig } from './config/backup.config';
import { MongoModule } from './mongo/mongo.module';
import mail from './config/mail.config';
import { CategoryModule } from './module/category.module';
import { BrandModule } from './module/brand.module';
import { UserModule } from './module/user.module';
import { ProductModule } from './module/product.module';
import { NewsModule } from './module/news.module';
import { DiscountModule } from './module/discount.module';
import { TypeModule } from './module/type.module';
import { OrderModule } from './module/order.module';
import { PayModule } from './module/pay.module';
import { ReviewModule } from './module/review.module';
import { AuthModule } from './module/auth.module';
import { AddressModule } from './module/address.module';
import { UserTokenModule } from './module/user-token.module';

require('dotenv').config();
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env'],
    load: [mail, getBackupConfig],
    cache: true,
  }),
    OrmModule,
    UserModule,
    UserTokenModule,
    RoleModule,
    AuthModule,
    CategoryModule,
    ProductModule,
    NewsModule,
    DiscountModule,
    TypeModule,
    MailModule,
    BrandModule,
    OrderModule,
    PayModule,
    ReviewModule,
    AddressModule,
    BackupModule,
    MinioModule,
    MongoModule

  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
