import { ConfigOptions } from 'cloudinary';
import {
   VIDEO_SERVER_1_API_KEY,
   VIDEO_SERVER_1_CLOUD_NAME,
   VIDEO_SERVER_1_API_SECRET,
   VIDEO_SERVER_2_API_KEY,
   VIDEO_SERVER_2_CLOUD_NAME,
   VIDEO_SERVER_2_API_SECRET,
   IMAGE_SERVER_1_API_KEY,
   IMAGE_SERVER_1_CLOUD_NAME,
   IMAGE_SERVER_1_API_SECRET,
   IMAGE_SERVER_2_API_KEY,
   IMAGE_SERVER_2_CLOUD_NAME,
   IMAGE_SERVER_2_API_SECRET,
} from '@/config/env';

export const VIDEO_SERVER_1_CONFIG: ConfigOptions = {
   cloud_name: VIDEO_SERVER_1_CLOUD_NAME,
   api_key: VIDEO_SERVER_1_API_KEY,
   api_secret: VIDEO_SERVER_1_API_SECRET,
};

export const VIDEO_SERVER_2_CONFIG: ConfigOptions = {
   cloud_name: VIDEO_SERVER_2_CLOUD_NAME,
   api_key: VIDEO_SERVER_2_API_KEY,
   api_secret: VIDEO_SERVER_2_API_SECRET,
};
export const IMAGE_SERVER_1_CONFIG: ConfigOptions = {
   cloud_name: IMAGE_SERVER_1_CLOUD_NAME,
   api_key: IMAGE_SERVER_1_API_KEY,
   api_secret: IMAGE_SERVER_1_API_SECRET,
};

export const IMAGE_SERVER_2_CONFIG: ConfigOptions = {
   cloud_name: IMAGE_SERVER_2_CLOUD_NAME,
   api_key: IMAGE_SERVER_2_API_KEY,
   api_secret: IMAGE_SERVER_2_API_SECRET,
};
