import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
// import { logger } from '@utils/logger';
import { telegramLogger } from '@utils/telegramLogger';
const errorMiddleware = (
   error: HttpException,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      // const status: number = error.status || 500;
      const status: number = 200;
      const message: string = error.message || 'Something went wrong';

      // logger.error(
      //    `❗❗❗❗❗ [${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message} ❗❗❗❗❗`
      // );

      telegramLogger.sendMessage(
         `❗❗❗❗❗ [${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message} ❗❗❗❗❗`
      );
      res.status(status).json({
         success: false,
         code: status,
         message,
         data: null,
      });
   } catch (error) {
      next(error);
   }
};

export default errorMiddleware;
