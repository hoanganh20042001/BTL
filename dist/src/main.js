"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const dirname = __dirname.replace('dist/', '');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(process.cwd(), 'uploads'), {
        prefix: '/upload/',
    });
    app.setGlobalPrefix('', {
        exclude: [{ path: 'nft/:type/:tokenId', method: common_1.RequestMethod.GET }]
    });
    app.setGlobalPrefix('api/v1');
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Nestjs API starter')
        .setDescription('Nestjs API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map