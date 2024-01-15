"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const tslib_1 = require("tslib");
const cloudinary_1 = tslib_1.__importDefault(require("cloudinary"));
const cloudinary_config_1 = require("../config/cloudinary.config");
cloudinary_1.default.v2.config(cloudinary_config_1.VIDEO_SERVER_1_CONFIG);
class UploadService {
    async uploadImageFromUrlToCloudinary(imageUrl) {
        try {
            const result = await cloudinary_1.default.v2.uploader.upload(imageUrl);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async uploadVideoFromYtbUrlToCloudinary(ytbUrl) {
        // const youtubeEmbedUrl = getYoutubeEmbedUrl(ytbUrl);
        const result = await cloudinary_1.default.v2.uploader.upload('https://www.youtube.com/embed/y-CogbHQ7Q8', {
            resource_type: 'video',
            folder: 'video-uploads',
        });
        return result;
    }
}
exports.UploadService = UploadService;
// Hàm hỗ trợ để lấy mã nhúng từ URL của YouTube
function getYoutubeEmbedUrl(ytbUrl) {
    const videoId = extractYoutubeVideoId(ytbUrl);
    return `https://www.youtube.com/embed/${videoId}`;
}
// Hàm hỗ trợ để trích xuất ID video từ URL của YouTube
function extractYoutubeVideoId(ytbUrl) {
    const videoIdMatch = ytbUrl.match(/(?:\?v=|\/embed\/|\/\d\/|\/vi\/|youtu.be\/|\/embed\/|\/e\/|v\/|\.be\/|\/user\/|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/([\w\-]{11})|\/groups\/([^\/]*)\/videos\/([\w\-]{11})|([\w\-]{11})\?t=\d+m\w+)/);
    if (videoIdMatch && videoIdMatch[1]) {
        return videoIdMatch[1];
    }
    return '';
}
//# sourceMappingURL=upload.service.js.map