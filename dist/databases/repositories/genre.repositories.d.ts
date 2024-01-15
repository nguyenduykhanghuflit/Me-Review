import { CreateGenreDto } from '../../core/dtos/genre.dto';
import { IGenre } from '../../core/interfaces/genre.interface';
import { ObjectId } from 'mongodb';
declare class GenreRepository {
    genres: any;
    Get(): Promise<IGenre[]>;
    GetDetail(id: ObjectId): Promise<IGenre>;
    Create(body: CreateGenreDto): Promise<IGenre>;
}
export default GenreRepository;
