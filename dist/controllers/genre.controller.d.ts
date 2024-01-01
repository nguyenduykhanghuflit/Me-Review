import { NextFunction, Request, Response } from 'express';
declare class GenresController {
    private genreService;
    get: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default GenresController;
