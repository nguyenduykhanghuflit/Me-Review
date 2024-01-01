"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_service_1 = require("../services/cloudinary.service");
const fs = require('fs');
const axios = require('axios');
class UploadController {
    constructor() {
        this.videoService = new cloudinary_service_1.VideoService();
        this.uploadVideoCloudinary = async (req, res, next) => {
            try {
                const file = req.file;
                const videoUrl = await this.videoService.UploadVideoCloudinary(file);
                res.json({ url: videoUrl });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal server error' });
            }
        };
        this.streamVideo = async (req, res, next) => {
            const cloudinaryUrl = 'https://res.cloudinary.com/dxshs8qrh/video/upload/v1703355220/video-uploads/y8nejj4obrobh3tdwj1c.mp4?fbclid=IwAR1SzOIcZn2dTT75s4UVWIrqOymGg7Scz_BNJGSJ0vx1LJrfVhJLS78Y2KM';
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
}
exports.default = UploadController;
//# sourceMappingURL=upload.controller.js.map