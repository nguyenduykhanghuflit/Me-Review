import Movie from '@schemas/moive.schema';
import { IMovie, IMovieFilter, IMovieVM } from '@/interfaces/movie.interface';
import { CreateMovieDto } from '@/dtos/movie.dto';

class MovieService {
   public movies = Movie;

   public async findMovies(filterMovie: IMovieFilter): Promise<IMovieVM> {
      const limit = filterMovie.pageSize;
      const skip = (filterMovie.page - 1) * limit;
      let query: any = {};

      for (const filter of filterMovie.filters) {
         if (filter.value !== null && filter.value != undefined) {
            switch (filter.type) {
               case 'category':
                  query.categories = filter.value;
                  break;
               case 'productionYear':
                  query.productionYear = filter.value;
                  break;
               case 'status':
                  query.status = filter.value;
                  break;
               default:
                  throw new Error('Invalid filter type.');
            }
         }
      }

      const movies: IMovie[] = await this.movies
         .find(query)
         .skip(skip)
         .limit(limit);

      const totalMovies: number = await this.movies
         .find(query)
         .countDocuments();

      const totalPage: number = Math.ceil(totalMovies / limit);

      const res: IMovieVM = { movies, totalPage };
      return res;
   }

   public async createMovie(createMovieDto: CreateMovieDto): Promise<IMovie> {
      const movie: IMovie = await this.movies.create(createMovieDto);
      return movie;
   }

   public async updateMovie(
      movieId: string,
      updateMovieDto: CreateMovieDto
   ): Promise<IMovie> {
      const movie: IMovie = await this.movies.findByIdAndUpdate(
         movieId,
         updateMovieDto,
         { new: true }
      );
      return movie;
   }
}

export default MovieService;
