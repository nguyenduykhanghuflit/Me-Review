import App from './app';
// import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
// import UsersRoute from '@routes/users.route';
import validateEnv from '@/utils/validate-env';
import CategoriesRoute from './routes/categories.route';
import GenreRoute from './routes/genre.route';
import MoviesRoute from './routes/movie.router';
import UploadRoute from './routes/upload.route';

validateEnv();

const app = new App([
   new IndexRoute(),
   // new UsersRoute(),
   // new AuthRoute(),
   new CategoriesRoute(),
   new GenreRoute(),
   new MoviesRoute(),
   new UploadRoute(),
]);

app.listen();
