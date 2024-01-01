import { CreateGenreDto } from '../dtos/genre.dto';
import { IGenre } from '../interfaces/genre.interface';
import { ObjectId } from 'mongodb';
declare class GenreService {
    genres: any;
    Get(): Promise<IGenre[]>;
    GetDetail(id: ObjectId): Promise<IGenre>;
    Create(body: CreateGenreDto): Promise<IGenre>;
}
export default GenreService;
