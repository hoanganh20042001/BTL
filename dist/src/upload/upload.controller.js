"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const form_data_1 = __importDefault(require("form-data"));
const axios_1 = __importDefault(require("axios"));
const swagger_1 = require("@nestjs/swagger");
const upload_dto_dto_1 = require("./dto/upload-dto.dto");
let UploadsController = class UploadsController {
    constructor() {
        this.nextCloudBaseUrl = 'http://192.168.1.6:8888';
        this.nextCloudUsername = 'admin';
        this.nextCloudPassword = 'admin';
    }
    async uploadFile(file) {
        try {
            console.log(file);
            const formData = new form_data_1.default();
            formData.append('file', file.buffer, {
                filename: file.originalname,
                contentType: file.mimetype,
            });
            console.log(file.buffer);
            const response = await (0, axios_1.default)({
                method: 'put',
                url: `${this.nextCloudBaseUrl}/apps/files/files/${file.originalname}`,
                data: formData,
                auth: {
                    username: this.nextCloudUsername,
                    password: this.nextCloudPassword,
                },
                headers: Object.assign({}, formData.getHeaders()),
            });
            console.log(response);
            return { success: true, file: response.data };
        }
        catch (error) {
            throw new common_1.HttpException('Upload failed', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload file' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Phiếu chấm thi phỏng vấn ',
        type: upload_dto_dto_1.FileUploadDto,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "uploadFile", null);
UploadsController = __decorate([
    (0, swagger_1.ApiTags)('uploads'),
    (0, common_1.Controller)('uploads')
], UploadsController);
exports.UploadsController = UploadsController;
//# sourceMappingURL=upload.controller.js.map