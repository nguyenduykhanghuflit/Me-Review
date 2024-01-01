import CategoriesController from '../controllers/category.controller';
import { Routes } from '../interfaces/routes.interface';
declare class CategoriesRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    categoriesController: CategoriesController;
    constructor();
    private initializeRoutes;
}
export default CategoriesRoute;
