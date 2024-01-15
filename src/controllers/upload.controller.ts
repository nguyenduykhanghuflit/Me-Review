import { NextFunction, Request, Response } from 'express';
import { VideoService } from '@services/cloudinary.service';
import { UploadService } from '@services/upload.service';
class UploadController {
   private videoService = new VideoService();
   private uploadService = new UploadService();
   public uploadVideoCloudinary = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         const file = req.file;
         const { server } = req.body;
         const videoUrl = await this.videoService.UploadVideoCloudinary(
            file,
            server
         );

         res.json({ url: videoUrl });
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Internal server error' });
      }
   };

   public uploadImageFromUrl = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      const { imageUrl } = req.query;

      try {
         var result = await this.uploadService.uploadImageFromUrlToCloudinary(
            imageUrl as string
         );
         return res.status(200).json({
            success: true,
            code: 200,
            data: { imageUrl: result.secure_url },
            message: 'Upload success',
         });
      } catch (error) {
         return res.status(200).json({
            success: true,
            code: 500,
            data: error,
            message: 'Server error',
         });
      }
   };
   public uploadVideoFromYtbUrl = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         const { ytbUrl } = req.query;
         var result =
            await this.uploadService.uploadVideoFromYtbUrlToCloudinary(
               ytbUrl as string
            );
         res.json({ result });
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Internal server error', error });
      }
   };
}

export default UploadController;
