/// <reference types="multer" />
export declare class UploadsController {
    private nextCloudBaseUrl;
    private nextCloudUsername;
    private nextCloudPassword;
    uploadFile(file: Express.Multer.File): Promise<{
        success: boolean;
        file: any;
    }>;
}
