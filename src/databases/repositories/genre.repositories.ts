import { CreateGenreDto } from '@dtos/genre.dto';
import { HttpException } from '@/utils/exception.utils';
import { IGenre } from '@interfaces/genre.interface';
import Genres from '@/databases/schemas/genres.schema';
import { isEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';

class GenreRepository {
   public genres = Genres;
   public async Get(): Promise<IGenre[]> {
      try {
         const data: IGenre[] = await this.genres.find();
         return data;
      } catch (error) {
         throw error;
      }
   }

   public async GetDetail(id: ObjectId): Promise<IGenre> {
      try {
         const data: IGenre = await this.genres.findById(id);
         return data;
      } catch (error) {
         throw error;
      }
   }

   public async Create(body: CreateGenreDto): Promise<IGenre> {
      try {
         if (isEmpty(body))
            throw new HttpException(400, 'categoryData is empty');
         const response: IGenre = await this.genres.create({
            ...body,
         });
         return response;
      } catch (error) {
         throw error;
      }
   }
}

export default GenreRepository;
