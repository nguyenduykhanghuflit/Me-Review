import { IMovie, IMovieFilter, IMovieVM } from '../interfaces/movie.interface';
import { CreateMovieDto } from '../dtos/movie.dto';
import { ObjectId } from 'mongoose';
declare class MovieService {
    movies: any;
    Get(filterMovie: IMovieFilter): Promise<IMovieVM>;
    GetDetail(id: ObjectId): Promise<IMovie>;
    Create(createMovieDto: CreateMovieDto): Promise<IMovie>;
    Update(movieId: string, updateMovieDto: CreateMovieDto): Promise<IMovie>;
}
export default MovieService;
