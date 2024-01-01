"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const upload_controller_1 = tslib_1.__importDefault(require("../controllers/upload.controller"));
const cloudinary_service_1 = require("../services/cloudinary.service");
class UploadRoute {
    constructor() {
        this.path = '/api/v1/upload';
        this.router = (0, express_1.Router)();
        this.uploadController = new upload_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/cloudinary`, cloudinary_service_1.upload.single('video'), this.uploadController.uploadVideoCloudinary);
        this.router.get(`${this.path}/stream`, this.uploadController.streamVideo);
    }
}
exports.default = UploadRoute;
//# sourceMappingURL=upload.route.js.map