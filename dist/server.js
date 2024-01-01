"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("@/app"));
const auth_route_1 = tslib_1.__importDefault(require("@routes/auth.route"));
const index_route_1 = tslib_1.__importDefault(require("@routes/index.route"));
const users_route_1 = tslib_1.__importDefault(require("@routes/users.route"));
const validateEnv_1 = tslib_1.__importDefault(require("@utils/validateEnv"));
const categories_route_1 = tslib_1.__importDefault(require("./routes/categories.route"));
const movie_router_1 = tslib_1.__importDefault(require("./routes/movie.router"));
const upload_route_1 = tslib_1.__importDefault(require("./routes/upload.route"));
(0, validateEnv_1.default)();
const app = new app_1.default([
    new index_route_1.default(),
    new users_route_1.default(),
    new auth_route_1.default(),
    new categories_route_1.default(),
    new movie_router_1.default(),
    new upload_route_1.default(),
]);
app.listen();
//# sourceMappingURL=server.js.map