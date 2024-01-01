import { CreateCategoryDto } from '../dtos/categories.dto';
import { ICategory } from '../interfaces/categories.interface';
declare class CategoryService {
    categories: any;
    findAllCategory(): Promise<ICategory[]>;
    createCategrory(categoryData: CreateCategoryDto): Promise<ICategory>;
}
export default CategoryService;
