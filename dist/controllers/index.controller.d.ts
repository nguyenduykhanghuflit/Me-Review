import { NextFunction, Request, Response } from 'express';
declare class IndexController {
    index: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
}
export default IndexController;
