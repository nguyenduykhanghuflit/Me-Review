import { Request } from 'express';
import multer, { Multer } from 'multer';
import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import {
   VIDEO_SERVER_1_CONFIG,
   VIDEO_SERVER_2_CONFIG,
   IMAGE_SERVER_1_CONFIG,
   IMAGE_SERVER_2_CONFIG,
} from '@/config/cloudinary.config';

const MAP_SERVER = {
   SERVER_1: VIDEO_SERVER_1_CONFIG,
   SERVER_2: VIDEO_SERVER_2_CONFIG,
};
cloudinary.v2.config(VIDEO_SERVER_1_CONFIG);

const storage = new CloudinaryStorage({
   cloudinary: cloudinary.v2,
   params: (req: Request, file: Express.Multer.File): any => {
      return {
         folder: 'video-uploads',
         resource_type: 'video',
      };
   },
});

export const upload: Multer = multer({ storage });

export class VideoService {
   async UploadVideoCloudinary(file: Express.Multer.File, server: string) {
      try {
         if (!file) {
            throw new Error('No video file provided');
         }

         const { path, filename } = file;

         MAP_SERVER[server] && cloudinary.v2.config(MAP_SERVER[server]);

         const { secure_url } = await cloudinary.v2.uploader.upload(path, {
            public_id: filename,
            resource_type: 'video',
         });

         return secure_url;
      } catch (error) {
         console.error(error);
         throw new Error('Failed to upload video');
      }
   }
}
