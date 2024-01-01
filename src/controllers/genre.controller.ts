import { NextFunction, Request, Response } from 'express';
import GenreService from '@services/genre.service';
import { IGenre } from '@/interfaces/genre.interface';
import { CreateGenreDto } from '@/dtos/genre.dto';

class GenresController {
   private genreService = new GenreService();

   public get = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const data: IGenre[] = await this.genreService.Get();

         return res.status(200).json({
            success: true,
            code: 200,
            data: data,
            message: 'Get data success',
         });
      } catch (error) {
         next(error);
      }
   };
   public create = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const body: CreateGenreDto = req.body;

         body.updatedAt = new Date();
         body.updatedBy = 'DEV';
         const data: IGenre = await this.genreService.Create(body);

         return res.status(200).json({
            success: true,
            code: 200,
            data: data,
            message: 'Get data success',
         });
      } catch (error) {
         next(error);
      }
   };
}

export default GenresController;
