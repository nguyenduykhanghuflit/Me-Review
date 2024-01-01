import { IMovie, IMovieFilter, IMovieVM } from '@/interfaces/movie.interface';
import { CreateMovieDto } from '@/dtos/movie.dto';
declare class MovieService {
    movies: any;
    findMovies(filterMovie: IMovieFilter): Promise<IMovieVM>;
    createMovie(createMovieDto: CreateMovieDto): Promise<IMovie>;
    updateMovie(movieId: string, updateMovieDto: CreateMovieDto): Promise<IMovie>;
}
export default MovieService;
