import MovieController from '../controllers/movie.controller';
import { Routes } from '../core/interfaces/routes.interface';
declare class MoviesRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    movieController: MovieController;
    constructor();
    private initializeRoutes;
}
export default MoviesRoute;
