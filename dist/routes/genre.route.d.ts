import GenresController from '../controllers/genre.controller';
import { Routes } from '../core/interfaces/routes.interface';
declare class GenreRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    genresController: GenresController;
    constructor();
    private initializeRoutes;
}
export default GenreRoute;
