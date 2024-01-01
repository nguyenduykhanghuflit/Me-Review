"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const compression_1 = tslib_1.__importDefault(require("compression"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const hpp_1 = tslib_1.__importDefault(require("hpp"));
const swagger_jsdoc_1 = tslib_1.__importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = tslib_1.__importDefault(require("swagger-ui-express"));
const _config_1 = require("./config");
const connectMySQL_1 = tslib_1.__importDefault(require("./databases/connectMySQL"));
const connectMySQL_2 = require("./databases/connectMySQL");
const connectMongoDb_1 = tslib_1.__importDefault(require("./databases/connectMongoDb"));
const error_middleware_1 = tslib_1.__importDefault(require("./middlewares/error.middleware"));
// import { stream } from './utils/logger';
const telegramLogger_1 = require("./utils/telegramLogger");
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.env = _config_1.NODE_ENV || 'development';
        this.port = _config_1.PORT || 3000;
        //this.connectToDatabasMySql();
        this.connectToMongoDB();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();
        this.initializeErrorHandling();
    }
    listen() {
        this.app.listen(this.port, () => {
            // logger.info(
            //    `✅✅✅✅✅✅✅✅ App listening on the port ${this.port}✅✅✅✅✅✅✅✅`
            // );
            telegramLogger_1.telegramLogger.sendMessage(`✅✅✅✅ App listening on the port ${this.port} ✅✅✅✅`, 'NOTICE');
        });
    }
    getServer() {
        return this.app;
    }
    connectToDatabasMySql() {
        (0, connectMySQL_2.connectMySQL)();
        connectMySQL_1.default.sequelize.sync({ force: false });
    }
    connectToMongoDB() {
        (0, connectMongoDb_1.default)();
    }
    initializeMiddlewares() {
        //this.app.use(morgan(LOG_FORMAT, { stream }));
        this.app.use((0, cors_1.default)({ origin: _config_1.ORIGIN, credentials: _config_1.CREDENTIALS }));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }
    initializeSwagger() {
        const options = {
            swaggerDefinition: {
                info: {
                    title: 'REST API',
                    version: '1.0.0',
                    description: 'Example docs',
                },
            },
            apis: ['swagger.yaml'],
        };
        const specs = (0, swagger_jsdoc_1.default)(options);
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map