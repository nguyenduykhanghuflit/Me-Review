import { NextFunction, Request, Response } from 'express';
import CategoryService from '@services/category.service';
import { ICategory } from '@/interfaces/categories.interface';
import { CreateCategoryDto } from '@/dtos/categories.dto';

class CategoriesController {
   private categoryService = new CategoryService();

   public getCategories = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         // const userId = Number(req.params.id);
         // const userData: CreateUserDto = req.body;
         const findAllCategory: ICategory[] = await this.categoryService.Get();

         res.status(200).json({
            data: findAllCategory,
            message: 'Get data success',
         });
      } catch (error) {
         next(error);
      }
   };
   public createCategory = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         // const userId = Number(req.params.id);
         const body: CreateCategoryDto = req.body;
         const data: ICategory = await this.categoryService.Create(body);

         res.status(200).json({
            data: data,
            message: 'Create Success',
         });
      } catch (error) {
         next(error);
      }
   };
}

export default CategoriesController;
