import { Multer } from 'multer';
export declare const upload: Multer;
export declare class VideoService {
    UploadVideoCloudinary(file: Express.Multer.File, server: string): Promise<string>;
}
