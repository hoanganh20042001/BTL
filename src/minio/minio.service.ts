// minio.service.ts
import { Injectable } from '@nestjs/common';
import * as Minio from 'minio';

@Injectable()
export class MinioService {
  private readonly minioClient: Minio.Client;

  constructor() {
    this.minioClient = new Minio.Client({
      endPoint: 'localhost',
      port: 9001,
      useSSL: false,
      accessKey: 'hoang20042001',
      secretKey: 'hoang20042001',
    });
  }

  async uploadFile(bucketName: string, objectName: string, buffer: Buffer, contentType: string): Promise<string> {
    try {
      const metaData = {
        'Content-Type': contentType,
      };
      await this.minioClient.putObject(bucketName, objectName, buffer, metaData);
      const url = await this.minioClient.presignedGetObject(bucketName, objectName);
      return url;
    } catch (error) {
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }
}
