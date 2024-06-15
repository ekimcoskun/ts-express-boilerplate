import { User } from "../entities/User";
import { IUserService } from "../interfaces/User/IUserService";

export class UserService implements IUserService {
    login(email: string, password: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    register(name: string, email: string, password: string, role: string, phoneNumber: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getAllUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: string, user: User): Promise<string> {
        throw new Error("Method not implemented.");
    }
}