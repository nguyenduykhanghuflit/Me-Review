import { CreateCategoryDto } from '../dtos/categories.dto';
import { ICategory } from '../interfaces/categories.interface';
import { ObjectId } from 'mongoose';
declare class CategoryService {
    categories: any;
    Get(): Promise<ICategory[]>;
    GetDetail(id: ObjectId): Promise<ICategory>;
    Create(categoryData: CreateCategoryDto): Promise<ICategory>;
}
export default CategoryService;
