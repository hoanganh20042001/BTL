import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import express from 'express';
import * as fs from 'fs'
import http from 'http'
import https from 'https'
import { join } from 'path';

import { AppModule } from './app.module';

// const basicAuth = require('express-basic-auth')
async function bootstrap() {
  // const server = express();
  // const dirname = __dirname.replace('dist/', '')
  const app = await NestFactory.create<NestExpressApplication>(AppModule,);
  app.useStaticAssets(join(process.cwd(), 'uploads'), {
    prefix: '/upload/',
  });
  app.setGlobalPrefix('', {
    exclude: [{ path: 'nft/:type/:tokenId', method: RequestMethod.GET }]
  });
  app.setGlobalPrefix('api/v1');

  //app.useGlobalPipes(new ValidationPipe(VALIDATION_PIPE_OPTIONS));
  // app.use(RequestIdMiddleware);
  app.enableCors();
  /** Swagger configuration*/
  const options = new DocumentBuilder()
    .setTitle('Nestjs API starter')
    .setDescription('Nestjs API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(8080);
}
bootstrap();
