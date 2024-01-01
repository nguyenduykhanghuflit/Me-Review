import { NextFunction, Request, Response } from 'express';

class IndexController {
   public index = (req: Request, res: Response, next: NextFunction) => {
      try {
         return res.status(200).json({
            success: true,
            code: 200,
            data: '🚀 Hello KhangNguyen 🚀',
            message: '🚀 Hello KhangNguyen 🚀',
         });
      } catch (error) {
         next(error);
      }
   };
}

export default IndexController;
