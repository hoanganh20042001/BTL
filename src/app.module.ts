import { Module } from '@nestjs/common';

import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExampleModule } from './example/example.module';
import { OrmModule } from './orm';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { UserTokenModule } from './user-token/user-token.module';
import { CategoryModule } from './category/category.module';
import { UploadsModule } from './upload/upload.module';
import { ProductModule } from './product/product.module';
import { NewsModule } from './news/news.module';
import { DiscountModule } from './discount/discount.module';
import { TypeModule } from './type/type.module';
import { MailModule } from './mail/mail.module';
import { BrandModule } from './brand/brand.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { PayModule } from './pay/pay.module';
import { ReviewModule } from './review/review.module';
import { AddressModule } from './address/address.module';
import { BackupModule } from './backup/backup.module';
import { MinioModule } from './minio/minio.module';
import { ConfigModule } from '@nestjs/config';
import { getBackupConfig } from './config/backup.config';
import mail from './config/mail.config';

require('dotenv').config();
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env'],
    load: [mail, getBackupConfig],
    cache: true,
  }),
    OrmModule,
    ExampleModule,
    UserModule,
    UserTokenModule,
    RoleModule,
    AuthModule,
    AccountModule,
    CategoryModule,
    UploadsModule,
    ProductModule,
    NewsModule,
    DiscountModule,
    TypeModule,
    MailModule,
    BrandModule,
    CartModule,
    OrderModule,
    PayModule,
    ReviewModule,
    AddressModule,
    BackupModule,
    MinioModule

  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
