import { Multer } from 'multer';
export declare const upload: Multer;
export declare class VideoService {
    uploadVideo(file: Express.Multer.File): Promise<string>;
}
