import App from './app';
// import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
// import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import CategoriesRoute from './routes/categories.route';
import MoviesRoute from './routes/movie.router';
import UploadRoute from './routes/upload.route';

validateEnv();

//tại sao tại tại sao
const app = new App([
   new IndexRoute(),
   // new UsersRoute(),
   // new AuthRoute(),
   new CategoriesRoute(),
   new MoviesRoute(),
   new UploadRoute(),
]);

app.listen();
