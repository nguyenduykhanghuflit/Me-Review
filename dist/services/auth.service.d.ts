import { CreateUserDto } from '../dtos/users.dto';
import { TokenData } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';
declare class AuthService {
    users: typeof import("../models/users.model").UserModel;
    signup(userData: CreateUserDto): Promise<User>;
    login(userData: CreateUserDto): Promise<{
        cookie: string;
        tokenData: TokenData;
    }>;
    logout(userData: User): Promise<User>;
    createToken(user: User): TokenData;
    createCookie(tokenData: TokenData): string;
}
export default AuthService;
