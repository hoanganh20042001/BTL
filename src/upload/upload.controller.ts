import { Controller, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import FormData from 'form-data';
import axios from 'axios';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileUploadDto } from './dto/upload-dto.dto';

@ApiTags('uploads')
@Controller('uploads')
export class UploadsController {
  private nextCloudBaseUrl = 'http://192.168.1.6:8888'; // Thay 'nextcloud_container_name' bằng tên của container Nextcloud hoặc địa chỉ IP của container
  private nextCloudUsername = 'admin';
  private nextCloudPassword = 'admin';

  @Post('upload')
  @ApiOperation({ summary: 'Upload file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Phiếu chấm thi phỏng vấn ',
    type: FileUploadDto,
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      console.log(file)
      const formData = new FormData();
      formData.append('file', file.buffer, {
        filename: file.originalname,
        contentType: file.mimetype,
      });
      console.log(file.buffer)
      const response = await axios({
        method: 'put',
        url: `${this.nextCloudBaseUrl}/apps/files/files/${file.originalname}`,
        data: formData,
        auth: {
          username: this.nextCloudUsername,
          password: this.nextCloudPassword,
        },
        headers: {
          ...formData.getHeaders(),
        },
      });
      console.log(response)
      return { success: true, file: response.data };
    } catch (error) {
      throw new HttpException('Upload failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
