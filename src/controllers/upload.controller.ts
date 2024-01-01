import { NextFunction, Request, Response } from 'express';
import { VideoService } from '@services/cloudinary.service';
const fs = require('fs');

const axios = require('axios');
class UploadController {
   private videoService = new VideoService();

   public uploadVideo = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         const file = req.file;
         const videoUrl = await this.videoService.uploadVideo(file);

         res.json({ url: videoUrl });
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Internal server error' });
      }
   };

   public streamVideo = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      const cloudinaryUrl =
         'https://res.cloudinary.com/dxshs8qrh/video/upload/v1703355220/video-uploads/y8nejj4obrobh3tdwj1c.mp4?fbclid=IwAR1SzOIcZn2dTT75s4UVWIrqOymGg7Scz_BNJGSJ0vx1LJrfVhJLS78Y2KM';

      res.setHeader('content-type', 'video/mp4');

      axios({
         url: cloudinaryUrl,
         method: 'GET',
         responseType: 'stream',
      })
         .then((response) => {
            response.data.pipe(res);
         })
         .catch((error) => {
            console.error('Error streaming video:', error);
            res.status(500).send('Internal server error');
         });
   };
}

export default UploadController;
