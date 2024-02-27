/// <reference types="node" />
export declare class MinioService {
    private readonly minioClient;
    constructor();
    uploadFile(bucketName: string, objectName: string, buffer: Buffer, contentType: string): Promise<string>;
}
