import { Request, Response } from 'express';
import multer, { Multer } from 'multer';
import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Cấu hình Cloudinary
cloudinary.v2.config({
   cloud_name: 'dxshs8qrh',
   api_key: '312364961238263',
   api_secret: 'cbmrwu3kYMv9-YYUEuNrp7W0IOc',
});

// Cấu hình Multer storage để lưu trữ video trong Cloudinary
const storage = new CloudinaryStorage({
   cloudinary: cloudinary.v2,
   params: (req: Request, file: Express.Multer.File): any => {
      return {
         folder: 'video-uploads',
         resource_type: 'video',
         // Các thuộc tính khác của params (nếu có)
      };
   },
});

// Thiết lập middleware Multer
export const upload: Multer = multer({ storage });

export class VideoService {
   async uploadVideo(file: Express.Multer.File) {
      try {
         if (!file) {
            throw new Error('No video file provided');
         }

         const { path, filename } = file;

         // Lấy URL của video từ Cloudinary
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
