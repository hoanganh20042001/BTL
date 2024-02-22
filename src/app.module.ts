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

require('dotenv').config();
@Module({
  imports: [
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
    BrandModule

  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
