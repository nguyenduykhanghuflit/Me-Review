import { NextFunction, Request, Response } from 'express';
declare class MovieController {
    private movieService;
    getMoviesByCategory: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    getMovieDetail: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    createMovie: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    createMulti: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    updateMovie: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
}
export default MovieController;
