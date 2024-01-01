import { NextFunction, Request, Response } from 'express';
declare class UploadController {
    private videoService;
    uploadVideoCloudinary: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    streamVideo: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default UploadController;
