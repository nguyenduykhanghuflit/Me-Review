"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_service_1 = require("../services/cloudinary.service");
const upload_service_1 = require("../services/upload.service");
class UploadController {
    constructor() {
        this.videoService = new cloudinary_service_1.VideoService();
        this.uploadService = new upload_service_1.UploadService();
        this.uploadVideoCloudinary = async (req, res, next) => {
            try {
                const file = req.file;
                const { server } = req.body;
                const videoUrl = await this.videoService.UploadVideoCloudinary(file, server);
                res.json({ url: videoUrl });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal server error' });
            }
        };
        this.uploadImageFromUrl = async (req, res, next) => {
            const { imageUrl } = req.query;
            try {
                var result = await this.uploadService.uploadImageFromUrlToCloudinary(imageUrl);
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: { imageUrl: result.secure_url },
                    message: 'Upload success',
                });
            }
            catch (error) {
                return res.status(200).json({
                    success: true,
                    code: 500,
                    data: null,
                    message: 'Server error',
                });
            }
        };
        this.uploadVideoFromYtbUrl = async (req, res, next) => {
            try {
                const { ytbUrl } = req.query;
                var result = await this.uploadService.uploadVideoFromYtbUrlToCloudinary(ytbUrl);
                res.json({ result });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal server error', error });
            }
        };
    }
}
exports.default = UploadController;
//# sourceMappingURL=upload.controller.js.map