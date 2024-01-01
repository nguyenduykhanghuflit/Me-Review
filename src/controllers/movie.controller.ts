// movie.controller.ts
import { NextFunction, Request, Response } from 'express';
import MovieService from '@services/movie.service';
import {
   IMovieFilter,
   IMovie,
   IFilterType,
} from '@/interfaces/movie.interface';
import { CreateMovieDto } from '@/dtos/movie.dto';

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
         ];
         const movieFilter: IMovieFilter = {
            page: pageNumber,
            pageSize,
            filters,
         };

         const movies: { movies: IMovie[]; totalPage: number } =
            await this.movieService.findMovies(movieFilter);

         res.status(200).json({
            data: movies,
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
         const movie: IMovie = await this.movieService.createMovie(
            createMovieDto
         );

         res.status(200).json({
            data: movie,
            message: 'Create movie success',
         });
      } catch (error) {
         next(error);
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
         const movie: IMovie = await this.movieService.updateMovie(
            movieId,
            updateMovieDto
         );

         res.status(200).json({
            data: movie,
            message: 'Update movie success',
         });
      } catch (error) {
         next(error);
      }
   };
}

export default MovieController;
