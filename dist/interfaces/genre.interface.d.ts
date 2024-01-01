import { ObjectId } from 'mongoose';
export interface IGenre {
    _id: ObjectId;
    name: string;
    description: string;
    updatedAt: Date;
    updatedBy: string;
}
