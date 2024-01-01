import { NextFunction, Request, Response } from 'express';
declare class CategoriesController {
    private categoryService;
    getCategories: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default CategoriesController;
