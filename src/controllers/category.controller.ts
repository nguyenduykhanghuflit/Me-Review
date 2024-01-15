import { NextFunction, Request, Response } from 'express';
import CatetoryRepository from '@/databases/repositories/category.repositories';
import { ICategory } from '@interfaces/categories.interface';
import { CreateCategoryDto } from '@dtos/categories.dto';

class CategoriesController {
   private categoryRepository = new CatetoryRepository();

   public getCategories = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         // const userId = Number(req.params.id);
         // const userData: CreateUserDto = req.body;
         const findAllCategory: ICategory[] =
            await this.categoryRepository.Get();

         return res.status(200).json({
            success: true,
            code: 200,
            data: findAllCategory,
            message: 'Get data success',
         });
      } catch (error) {
         return next(error);
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
         const data: ICategory = await this.categoryRepository.Create(body);

         return res.status(200).json({
            success: true,
            code: 200,
            data: data,
            message: 'Get data success',
         });
      } catch (error) {
         next(error);
      }
   };
}

export default CategoriesController;
