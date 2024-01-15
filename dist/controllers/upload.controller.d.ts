import { NextFunction, Request, Response } from 'express';
declare class UploadController {
    private videoService;
    private uploadService;
    uploadVideoCloudinary: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    uploadImageFromUrl: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    uploadVideoFromYtbUrl: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default UploadController;
