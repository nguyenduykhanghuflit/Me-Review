import UploadController from '../controllers/upload.controller';
import { Routes } from '../core/interfaces/routes.interface';
declare class UploadRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    uploadController: UploadController;
    constructor();
    private initializeRoutes;
}
export default UploadRoute;
