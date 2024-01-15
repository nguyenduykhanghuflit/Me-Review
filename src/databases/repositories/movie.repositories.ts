import Movie from '@/databases/schemas/moive.schema';
import { IMovie, IMovieFilter, IMovieVM } from '@interfaces/movie.interface';
import { CreateMovieDto, UpdateMovieDto } from '@dtos/movie.dto';
import { ObjectId } from 'mongoose';

class MovieRepository {
   public movies = Movie;

   public async Dev(): Promise<IMovieVM> {
      const movies: IMovie[] = await this.movies
         .find({ movieName: { $ne: 'asd' } })
         .skip(0)
         .limit(100)
         .populate({
            path: 'genres',
            model: 'Genre',
            select: '_id name description',
         })
         .populate({
            path: 'genres',
            model: 'Genre',
            select: '_id name description',
         })
         .populate({
            path: 'categories',
            model: 'Category',
            select: '_id name description',
         })
         .populate({
            path: 'mainGenres',
            model: 'Genre',
            select: '_id name description',
         })
         .exec();

      //  await this.movies.deleteMany({});
      const res: IMovieVM = {
         currentPage: 1,
         totalPage: 100,
         totalMovies: movies.length,
         movies,
      };
      return res;
   }

   public async Get(filterMovie: IMovieFilter): Promise<IMovieVM> {
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
               case 'keyword':
                  query.$or = [
                     { title: { $regex: filter.value, $options: 'i' } },
                     { movieName: { $regex: filter.value, $options: 'i' } },
                     { description: { $regex: filter.value, $options: 'i' } },
                     { director: { $regex: filter.value, $options: 'i' } },
                  ];
                  break;
               case 'genre':
                  query.$or = [
                     { genres: { $in: [filter.value] } },
                     { mainGenres: filter.value },
                  ];
                  break;
               default:
                  throw new Error('Invalid filter type.');
            }
         }
      }

      const movies: IMovie[] = await this.movies
         .find(query)
         .skip(skip)
         .limit(limit)
         .populate({
            path: 'genres',
            model: 'Genre',
            select: '_id name description',
         })
         .populate({
            path: 'categories',
            model: 'Category',
            select: '_id name description',
         })
         .populate({
            path: 'mainGenres',
            model: 'Genre',
            select: '_id name description',
         })
         .exec();

      const totalMovies: number = await this.movies
         .find(query)
         .countDocuments();

      const totalPage: number = Math.ceil(totalMovies / limit);

      const res: IMovieVM = {
         currentPage: filterMovie.page,
         totalPage,
         totalMovies: movies.length,
         movies,
      };
      return res;
   }

   public async GetDetail(id: ObjectId): Promise<IMovie> {
      try {
         const data: IMovie = this.movies.findById(id);
         return data;
      } catch (error) {
         throw error;
      }
   }

   public async Create(createMovieDto: CreateMovieDto): Promise<IMovie> {
      const movie: IMovie = await this.movies.create(createMovieDto);
      return movie;
   }

   public async Update(
      movieId: string,
      updateMovieDto: UpdateMovieDto
   ): Promise<IMovie> {
      try {
         const movie: IMovie = await this.movies.findByIdAndUpdate(
            movieId,
            { $set: updateMovieDto },
            { new: true }
         );
         return movie;
      } catch (error) {
         console.log(error);
      }
   }
}

export default MovieRepository;
