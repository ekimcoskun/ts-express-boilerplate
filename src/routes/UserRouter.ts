import express from 'express';
import { Container } from 'inversify';
import { IUserService } from '../interfaces/User/IUserService';
import { INTERFACE_TYPE } from '../utils';
import { UserService } from '../services/UserService';
import { IUserRepository } from '../interfaces/User/IUserRepository';
import { UserRepository } from '../repositories/UserRepository';
import { UserController } from '../controllers/UserController';
import { Token } from '../libs/token';
import { Hash } from '../libs/hash';

const userRouter = express.Router();

const container = new Container();

container.bind<IUserService>(INTERFACE_TYPE.UserService).to(UserService);
container.bind<IUserRepository>(INTERFACE_TYPE.UserRepository).to(UserRepository);
container.bind(INTERFACE_TYPE.UserController).to(UserController)
container.bind(INTERFACE_TYPE.Token).to(Token);
container.bind(INTERFACE_TYPE.Hash).to(Hash);

const controller = container.get<UserController>(INTERFACE_TYPE.UserController);

userRouter.post("/login", controller.onLogin.bind(controller));
userRouter.post("/register", controller.onRegister.bind(controller));
userRouter.get("/getAll", controller.onGetAllUsers.bind(controller));
userRouter.put("/update", controller.onUpdateUser.bind(controller));
userRouter.delete("/delete", controller.onDeleteUser.bind(controller));

export default userRouter;