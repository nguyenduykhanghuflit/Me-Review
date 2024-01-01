import { Router } from 'express';
import CategoriesController from '@controllers/category.controller';
import { CreateCategoryDto } from '@dtos/categories.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class CategoriesRoute implements Routes {
   public path = '/api/v1/categories';
   public router = Router();
   public categoriesController = new CategoriesController();

   constructor() {
      this.initializeRoutes();
   }

   private initializeRoutes() {
      this.router.get(`${this.path}`, this.categoriesController.getCategories);

      //   this.router.get(
      //      `${this.path}/:id(\\d+)`,
      //      this.usersController.getUserById
      //   );

      this.router.post(
         `${this.path}`,
         validationMiddleware(CreateCategoryDto, 'body', true),
         this.categoriesController.createCategory
      );

      //   this.router.put(
      //      `${this.path}/:id(\\d+)`,
      //      validationMiddleware(CreateUserDto, 'body', true),
      //      this.usersController.updateUser
      //   );

      //   this.router.delete(
      //      `${this.path}/:id(\\d+)`,
      //      this.usersController.deleteUser
      //   );
   }
}

export default CategoriesRoute;
