// import { Router } from 'express';
// import UsersController from '../controllers/users.controller';
// import { CreateUserDto } from '../core/dtos/users.dto';
// import { Routes } from '../core/interfaces/routes.interface';
// import validationMiddleware from '../middlewares/validation.middleware';
// class UsersRoute implements Routes {
//    public path = '/users';
//    public router = Router();
//    public usersController = new UsersController();
//    constructor() {
//       this.initializeRoutes();
//    }
//    private initializeRoutes() {
//       this.router.get(`${this.path}`, this.usersController.getUsers);
//       this.router.get(
//          `${this.path}/:id(\\d+)`,
//          this.usersController.getUserById
//       );
//       this.router.post(
//          `${this.path}`,
//          validationMiddleware(CreateUserDto, 'body'),
//          this.usersController.createUser
//       );
//       this.router.put(
//          `${this.path}/:id(\\d+)`,
//          validationMiddleware(CreateUserDto, 'body', true),
//          this.usersController.updateUser
//       );
//       this.router.delete(
//          `${this.path}/:id(\\d+)`,
//          this.usersController.deleteUser
//       );
//    }
// }
// export default UsersRoute;
//# sourceMappingURL=users.route.js.map