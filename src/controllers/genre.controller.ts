import { NextFunction, Request, Response } from 'express';
import GenreRepository from '@/databases/repositories/genre.repositories';
import { IGenre } from '@interfaces/genre.interface';
import { CreateGenreDto } from '@dtos/genre.dto';

class GenresController {
   private genreRepository = new GenreRepository();

   public get = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const data: IGenre[] = await this.genreRepository.Get();

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
         const data: IGenre = await this.genreRepository.Create(body);

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
