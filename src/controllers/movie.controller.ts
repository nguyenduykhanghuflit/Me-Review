// movie.controller.ts
import { NextFunction, Request, Response } from 'express';
import MovieService from '@services/movie.service';
import {
   IMovieFilter,
   IMovie,
   IFilterType,
} from '@/interfaces/movie.interface';
import { CreateMovieDto } from '@/dtos/movie.dto';
import { ObjectId } from 'mongoose';

class MovieController {
   private movieService = new MovieService();

   public getMoviesByCategory = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         const pageNumber: number = Number(req.query.pageNumer || 1);
         const pageSizeQuery = req.query.pageSize;
         const pageSize: number =
            !pageSizeQuery ||
            Number(pageSizeQuery) <= 0 ||
            Number(pageSizeQuery) > 20
               ? 20
               : Number(pageSizeQuery);

         const filters: IFilterType[] = [
            { type: 'category', value: req.query.category as string },
            {
               type: 'productionYear',
               value: req.query.productionYear as string,
            },
            { type: 'status', value: req.query.status as string },
            { type: 'keyword', value: req.query.keyword as string },
            { type: 'genre', value: req.query.genre as string },
         ];
         const movieFilter: IMovieFilter = {
            page: pageNumber,
            pageSize,
            filters,
         };

         const movies: { movies: IMovie[]; totalPage: number } =
            await this.movieService.Get(movieFilter);

         return res.status(200).json({
            success: true,
            code: 200,
            data: movies,
            message: 'Get movies  success',
         });
      } catch (error) {
         next(error);
      }
   };

   public getMovieDetail = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         const movieId: unknown = req.params.id;
         var data = await this.movieService.GetDetail(movieId as ObjectId);

         return res.status(200).json({
            success: true,
            code: 200,
            data: data,
            message: 'Get movies  success',
         });
      } catch (error) {
         next(error);
      }
   };

   public createMovie = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         const createMovieDto: CreateMovieDto = req.body;
         const movie: IMovie = await this.movieService.Create(createMovieDto);

         return res.status(200).json({
            success: true,
            code: 200,
            data: movie,
            message: 'Create movie success',
         });
      } catch (error) {
         return next(error);
      }
   };
   public createMulti = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         const createMovieDtos: CreateMovieDto[] = req.body;

         let result = [];
         for (let i = 0; i < createMovieDtos.length; i++) {
            const movie: IMovie = await this.movieService.Create(
               createMovieDtos[i]
            );
            result.push(movie);
         }

         return res.status(200).json({
            success: true,
            code: 200,
            data: result,
            message: 'Create movie success',
         });
      } catch (error) {
         return next(error);
      }
   };
   public updateMovie = async (
      req: Request,
      res: Response,
      next: NextFunction
   ) => {
      try {
         const movieId: string = req.params.movieId;
         const updateMovieDto: CreateMovieDto = req.body;
         const movie: IMovie = await this.movieService.Update(
            movieId,
            updateMovieDto
         );

         return res.status(200).json({
            success: true,
            code: 200,
            data: movie,
            message: 'Update movie success',
         });
      } catch (error) {
         return next(error);
      }
   };
}

export default MovieController;
