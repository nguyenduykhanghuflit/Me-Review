import { ObjectId } from 'mongoose';
export interface ICategory {
    _id: ObjectId;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    updatedBy: string;
    isActive: boolean;
}
