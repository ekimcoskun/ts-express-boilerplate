import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/userService";

export const INTERFACE_TYPE= {
    UserService: Symbol.for("IUserService"),
    UserRepository: Symbol.for("IUserRepository")
}