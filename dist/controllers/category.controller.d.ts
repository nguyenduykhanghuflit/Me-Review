import { NextFunction, Request, Response } from 'express';
declare class CategoriesController {
    private categoryRepository;
    getCategories: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    createCategory: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
}
export default CategoriesController;
