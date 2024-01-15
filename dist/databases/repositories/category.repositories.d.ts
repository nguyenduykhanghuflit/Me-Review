import { CreateCategoryDto } from '../../core/dtos/categories.dto';
import { ICategory } from '../../core/interfaces/categories.interface';
import { ObjectId } from 'mongoose';
declare class CategoryRepository {
    categories: any;
    Get(): Promise<ICategory[]>;
    GetDetail(id: ObjectId): Promise<ICategory>;
    Create(categoryData: CreateCategoryDto): Promise<ICategory>;
}
export default CategoryRepository;
