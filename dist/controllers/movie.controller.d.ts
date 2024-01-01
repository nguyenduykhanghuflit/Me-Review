import { NextFunction, Request, Response } from 'express';
declare class MovieController {
    private movieService;
    getMoviesByCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createMovie: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateMovie: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default MovieController;
