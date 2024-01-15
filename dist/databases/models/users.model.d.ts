import { Sequelize, Model, Optional } from 'sequelize';
import { User } from '../../core/interfaces/users.interface';
export type UserCreationAttributes = Optional<User, 'id' | 'email' | 'password'>;
export declare class UserModel extends Model<User, UserCreationAttributes> implements User {
    id: number;
    email: string;
    password: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof UserModel;
