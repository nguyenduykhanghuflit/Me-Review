"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = exports.upload = void 0;
const tslib_1 = require("tslib");
const multer_1 = tslib_1.__importDefault(require("multer"));
const cloudinary_1 = tslib_1.__importDefault(require("cloudinary"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
cloudinary_1.default.v2.config({
    cloud_name: 'dxshs8qrh',
    api_key: '312364961238263',
    api_secret: 'cbmrwu3kYMv9-YYUEuNrp7W0IOc',
});
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.default.v2,
    params: (req, file) => {
        return {
            folder: 'video-uploads',
            resource_type: 'video',
        };
    },
});
// Thiết lập middleware Multer
exports.upload = (0, multer_1.default)({ storage });
class VideoService {
    async UploadVideoCloudinary(file) {
        try {
            if (!file) {
                throw new Error('No video file provided');
            }
            const { path, filename } = file;
            const { secure_url } = await cloudinary_1.default.v2.uploader.upload(path, {
                public_id: filename,
                resource_type: 'video',
            });
            return secure_url;
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to upload video');
        }
    }
}
exports.VideoService = VideoService;
//# sourceMappingURL=cloudinary.service.js.map