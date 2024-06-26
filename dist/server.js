"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
// import AuthRoute from './routes/auth.route';
const index_route_1 = tslib_1.__importDefault(require("./routes/index.route"));
// import UsersRoute from './routes/users.route';
const validate_env_1 = tslib_1.__importDefault(require("./utils/validate-env"));
const categories_route_1 = tslib_1.__importDefault(require("./routes/categories.route"));
const genre_route_1 = tslib_1.__importDefault(require("./routes/genre.route"));
const movie_router_1 = tslib_1.__importDefault(require("./routes/movie.router"));
const upload_route_1 = tslib_1.__importDefault(require("./routes/upload.route"));
(0, validate_env_1.default)();
const app = new app_1.default([
    new index_route_1.default(),
    // new UsersRoute(),
    // new AuthRoute(),
    new categories_route_1.default(),
    new genre_route_1.default(),
    new movie_router_1.default(),
    new upload_route_1.default(),
]);
app.listen();
//# sourceMappingURL=server.js.map