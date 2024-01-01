import { NextFunction, Request, Response } from 'express';
import { IMovie } from '../interfaces/movie.interface';
declare class MovieController {
    private movieService;
    getMoviesByCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMovieDetail: (req: Request, res: Response, next: NextFunction) => Promise<IMovie>;
    createMovie: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createMulti: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateMovie: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default MovieController;
