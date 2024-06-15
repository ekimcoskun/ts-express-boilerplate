import express from 'express';
import { Container } from 'inversify';
import { IUserService } from '../interfaces/User/IUserService';
import { INTERFACE_TYPE } from '../utils';
import { UserService } from '../services/userService';
import { IUserRepository } from '../interfaces/User/IUserRepository';
import { UserRepository } from '../repositories/UserRepository';

const userRouter = express.Router();

const container = new Container();

container.bind<IUserService>(INTERFACE_TYPE.UserService).to(UserService);
container.bind<IUserRepository>(INTERFACE_TYPE.UserRepository).to(UserRepository);

export default userRouter;