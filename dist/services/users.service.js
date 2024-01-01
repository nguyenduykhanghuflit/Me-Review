"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const connectMySQL_1 = tslib_1.__importDefault(require("../databases/connectMySQL"));
const HttpException_1 = require("../exceptions/HttpException");
const util_1 = require("../utils/util");
class UserService {
    constructor() {
        this.users = connectMySQL_1.default.Users;
    }
    async findAllUser() {
        const allUser = await this.users.findAll();
        return allUser;
    }
    async findUserById(userId) {
        if ((0, util_1.isEmpty)(userId))
            throw new HttpException_1.HttpException(400, 'UserId is empty');
        const findUser = await this.users.findByPk(userId);
        if (!findUser)
            throw new HttpException_1.HttpException(409, "User doesn't exist");
        return findUser;
    }
    async createUser(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, 'userData is empty');
        const findUser = await this.users.findOne({
            where: { email: userData.email },
        });
        if (findUser)
            throw new HttpException_1.HttpException(409, `This email ${userData.email} already exists`);
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        const createUserData = await this.users.create(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
        return createUserData;
    }
    async updateUser(userId, userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, 'userData is empty');
        const findUser = await this.users.findByPk(userId);
        if (!findUser)
            throw new HttpException_1.HttpException(409, "User doesn't exist");
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        await this.users.update(Object.assign(Object.assign({}, userData), { password: hashedPassword }), { where: { id: userId } });
        const updateUser = await this.users.findByPk(userId);
        return updateUser;
    }
    async deleteUser(userId) {
        if ((0, util_1.isEmpty)(userId))
            throw new HttpException_1.HttpException(400, "User doesn't existId");
        const findUser = await this.users.findByPk(userId);
        if (!findUser)
            throw new HttpException_1.HttpException(409, "User doesn't exist");
        await this.users.destroy({ where: { id: userId } });
        return findUser;
    }
}
exports.default = UserService;
//# sourceMappingURL=users.service.js.map