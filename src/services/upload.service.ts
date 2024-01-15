import cloudinary from 'cloudinary';
import {
   VIDEO_SERVER_1_CONFIG,
   VIDEO_SERVER_2_CONFIG,
   IMAGE_SERVER_1_CONFIG,
   IMAGE_SERVER_2_CONFIG,
} from '@/config/cloudinary.config';

cloudinary.v2.config(VIDEO_SERVER_1_CONFIG);
export class UploadService {
   async uploadImageFromUrlToCloudinary(
      imageUrl: string
   ): Promise<cloudinary.UploadApiResponse> {
      try {
         const result = await cloudinary.v2.uploader.upload(imageUrl);
         return result;
      } catch (error) {
         throw error;
      }
   }

   async uploadVideoFromYtbUrlToCloudinary(
      ytbUrl: string
   ): Promise<cloudinary.UploadApiResponse> {
      // const youtubeEmbedUrl = getYoutubeEmbedUrl(ytbUrl);

      const result = await cloudinary.v2.uploader.upload(
         'https://www.youtube.com/embed/y-CogbHQ7Q8',
         {
            resource_type: 'video',
            folder: 'video-uploads',
         }
      );

      return result;
   }
}

// Hàm hỗ trợ để lấy mã nhúng từ URL của YouTube
function getYoutubeEmbedUrl(ytbUrl) {
   const videoId = extractYoutubeVideoId(ytbUrl);
   return `https://www.youtube.com/embed/${videoId}`;
}

// Hàm hỗ trợ để trích xuất ID video từ URL của YouTube
function extractYoutubeVideoId(ytbUrl) {
   const videoIdMatch = ytbUrl.match(
      /(?:\?v=|\/embed\/|\/\d\/|\/vi\/|youtu.be\/|\/embed\/|\/e\/|v\/|\.be\/|\/user\/|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/([\w\-]{11})|\/groups\/([^\/]*)\/videos\/([\w\-]{11})|([\w\-]{11})\?t=\d+m\w+)/
   );
   if (videoIdMatch && videoIdMatch[1]) {
      return videoIdMatch[1];
   }
   return '';
}
