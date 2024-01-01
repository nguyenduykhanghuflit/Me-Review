import { IMovie, IMovieFilter, IMovieVM } from '../interfaces/movie.interface';
import { CreateMovieDto, UpdateMovieDto } from '../dtos/movie.dto';
import { ObjectId } from 'mongoose';
declare class MovieService {
    movies: any;
    Dev(): Promise<IMovieVM>;
    Get(filterMovie: IMovieFilter): Promise<IMovieVM>;
    GetDetail(id: ObjectId): Promise<IMovie>;
    Create(createMovieDto: CreateMovieDto): Promise<IMovie>;
    Update(movieId: string, updateMovieDto: UpdateMovieDto): Promise<IMovie>;
}
export default MovieService;
