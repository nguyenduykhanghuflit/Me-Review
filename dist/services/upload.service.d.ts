import cloudinary from 'cloudinary';
export declare class UploadService {
    uploadImageFromUrlToCloudinary(imageUrl: string): Promise<cloudinary.UploadApiResponse>;
    uploadVideoFromYtbUrlToCloudinary(ytbUrl: string): Promise<cloudinary.UploadApiResponse>;
}
