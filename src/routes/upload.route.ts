import { Router } from 'express';
import UploadController from '@controllers/upload.controller';
import { upload } from '@services/cloudinary.service';
import { Routes } from '@interfaces/routes.interface';

class UploadRoute implements Routes {
   public path = '/api/v1';
   public router = Router();
   public uploadController = new UploadController();

   constructor() {
      this.initializeRoutes();
   }

   private initializeRoutes() {
      this.router.post(
         `${this.path}/upload`,
         upload.single('video'),
         this.uploadController.uploadVideo
      );
      this.router.get(`${this.path}/stream`, this.uploadController.streamVideo);
   }
}

export default UploadRoute;
