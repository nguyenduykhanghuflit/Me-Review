"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = exports.upload = void 0;
const tslib_1 = require("tslib");
const multer_1 = tslib_1.__importDefault(require("multer"));
const cloudinary_1 = tslib_1.__importDefault(require("cloudinary"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_config_1 = require("../config/cloudinary.config");
const MAP_SERVER = {
    SERVER_1: cloudinary_config_1.VIDEO_SERVER_1_CONFIG,
    SERVER_2: cloudinary_config_1.VIDEO_SERVER_2_CONFIG,
};
cloudinary_1.default.v2.config(cloudinary_config_1.VIDEO_SERVER_1_CONFIG);
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.default.v2,
    params: (req, file) => {
        return {
            folder: 'video-uploads',
            resource_type: 'video',
        };
    },
});
exports.upload = (0, multer_1.default)({ storage });
class VideoService {
    async UploadVideoCloudinary(file, server) {
        try {
            if (!file) {
                throw new Error('No video file provided');
            }
            const { path, filename } = file;
            MAP_SERVER[server] && cloudinary_1.default.v2.config(MAP_SERVER[server]);
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