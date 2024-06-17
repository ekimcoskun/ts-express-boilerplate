import { User } from "../entities/User";
import { IUserRepository } from "../interfaces/User/IUserRepository";

export class UserRepository implements IUserRepository {
    login(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    register(name: string, email: string, password: string,  phoneNumber: string): Promise<string> {
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