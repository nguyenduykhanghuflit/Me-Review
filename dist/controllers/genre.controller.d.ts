import { NextFunction, Request, Response } from 'express';
declare class GenresController {
    private genreService;
    get: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    create: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
}
export default GenresController;
