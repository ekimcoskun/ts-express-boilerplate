import express from 'express';
import { Container } from 'inversify';
import { IUserService } from '../interfaces/User/IUserService';
import { INTERFACE_TYPE } from '../utils';
import { UserService } from '../services/UserService';
import { IUserRepository } from '../interfaces/User/IUserRepository';
import { UserRepository } from '../repositories/UserRepository';
import { UserController } from '../controllers/UserController';

const userRouter = express.Router();

const container = new Container();

container.bind<IUserService>(INTERFACE_TYPE.UserService).to(UserService);
container.bind<IUserRepository>(INTERFACE_TYPE.UserRepository).to(UserRepository);

container.bind(INTERFACE_TYPE.UserController).to(UserController)

const controller = container.get<UserController>(INTERFACE_TYPE.UserController);

export default userRouter;