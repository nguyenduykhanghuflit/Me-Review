import Sequelize from 'sequelize';
export declare const connectMySQL: () => Promise<void>;
declare const initMysql: {
    Users: typeof import("../models/users.model").UserModel;
    sequelize: Sequelize.Sequelize;
    Sequelize: typeof Sequelize;
};
export default initMysql;
