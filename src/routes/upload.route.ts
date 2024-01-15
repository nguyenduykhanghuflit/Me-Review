import { Router } from 'express';
import UploadController from '@controllers/upload.controller';
import { upload } from '@services/cloudinary.service';
import { Routes } from '@interfaces/routes.interface';

class UploadRoute implements Routes {
   public path = '/api/v1/upload';
   public router = Router();
   public uploadController = new UploadController();

   constructor() {
      this.initializeRoutes();
   }

   private initializeRoutes() {
      this.router.post(
         `${this.path}/cloudinary`,
         upload.single('video'),
         this.uploadController.uploadVideoCloudinary
      );

      this.router.get(
         `${this.path}/image-url`,
         this.uploadController.uploadImageFromUrl
      );

      this.router.get(
         `${this.path}/video-ytb-url`,
         this.uploadController.uploadVideoFromYtbUrl
      );
   }
}

export default UploadRoute;
