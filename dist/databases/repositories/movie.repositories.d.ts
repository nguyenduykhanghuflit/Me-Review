import { IMovie, IMovieFilter, IMovieVM } from '../../core/interfaces/movie.interface';
import { CreateMovieDto, UpdateMovieDto } from '../../core/dtos/movie.dto';
import { ObjectId } from 'mongoose';
declare class MovieRepository {
    movies: any;
    Dev(): Promise<IMovieVM>;
    Get(filterMovie: IMovieFilter): Promise<IMovieVM>;
    GetDetail(id: ObjectId): Promise<IMovie>;
    Create(createMovieDto: CreateMovieDto): Promise<IMovie>;
    Update(movieId: string, updateMovieDto: UpdateMovieDto): Promise<IMovie>;
}
export default MovieRepository;
