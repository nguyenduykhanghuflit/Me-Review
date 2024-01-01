import Category from '@schemas/category.schema';
import { CreateCategoryDto } from '@dtos/categories.dto';
import { HttpException } from '@exceptions/HttpException';
import { ICategory } from '@/interfaces/categories.interface';
import { isEmpty } from '@utils/util';

class CategoryService {
   public categories = Category;

   public async findAllCategory(): Promise<ICategory[]> {
      const allCategory: ICategory[] = await this.categories.find();
      return allCategory;
   }
   public async createCategrory(
      categoryData: CreateCategoryDto
   ): Promise<ICategory> {
      if (isEmpty(categoryData))
         throw new HttpException(400, 'categoryData is empty');
      const createCategroryData: ICategory = await this.categories.create({
         ...categoryData,
      });
      return createCategroryData;
   }
}

export default CategoryService;
