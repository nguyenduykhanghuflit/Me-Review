import { Router } from 'express';
import MovieController from '@controllers/movie.controller';
import { CreateMovieDto } from '@dtos/movie.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class MoviesRoute implements Routes {
   public path = '/api/v1/movies';
   public router = Router();
   public movieController = new MovieController();

   constructor() {
      this.initializeRoutes();
   }

   private initializeRoutes() {
      this.router.get(`${this.path}`, this.movieController.getMoviesByCategory);

      //   this.router.get(
      //      `${this.path}/:id(\\d+)`,
      //      this.usersController.getUserById
      //   );

      this.router.post(`${this.path}`, this.movieController.createMovie);

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

export default MoviesRoute;
