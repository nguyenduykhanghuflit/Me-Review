import Category from '@/databases/schemas/category.schema';
import { CreateCategoryDto } from '@dtos/categories.dto';
import { HttpException } from '@utils/exception.utils';
import { ICategory } from '@interfaces/categories.interface';
import { isEmpty } from '@utils/util';
import { ObjectId } from 'mongoose';

class CategoryRepository {
   public categories = Category;

   public async Get(): Promise<ICategory[]> {
      const allCategory: ICategory[] = await this.categories.find();
      return allCategory;
   }

   public async GetDetail(id: ObjectId): Promise<ICategory> {
      try {
         const data: ICategory = await this.categories.findById(id);
         return data;
      } catch (error) {
         throw error;
      }
   }

   public async Create(categoryData: CreateCategoryDto): Promise<ICategory> {
      if (isEmpty(categoryData))
         throw new HttpException(400, 'categoryData is empty');
      const createCategroryData: ICategory = await this.categories.create({
         ...categoryData,
      });
      return createCategroryData;
   }
}

export default CategoryRepository;
