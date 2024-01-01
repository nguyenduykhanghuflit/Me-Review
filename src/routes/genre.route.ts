import { Router } from 'express';
import GenresController from '@controllers/genre.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreateGenreDto } from '@/dtos/genre.dto';

class GenreRoute implements Routes {
   public path = '/api/v1/genres';
   public router = Router();
   public genresController = new GenresController();

   constructor() {
      this.initializeRoutes();
   }

   private initializeRoutes() {
      this.router.get(`${this.path}`, this.genresController.get);

      this.router.post(
         `${this.path}`,
         validationMiddleware(CreateGenreDto, 'body', true),
         this.genresController.create
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

export default GenreRoute;
