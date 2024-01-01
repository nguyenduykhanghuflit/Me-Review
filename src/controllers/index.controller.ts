import { NextFunction, Request, Response } from 'express';

class IndexController {
   public index = (req: Request, res: Response, next: NextFunction) => {
      try {
         res.send({
            code: 200,
            msg: '🚀 Hello KhangNguyen 🚀',
         });
      } catch (error) {
         next(error);
      }
   };
}

export default IndexController;
