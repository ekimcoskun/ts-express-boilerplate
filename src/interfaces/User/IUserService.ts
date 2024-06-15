import { User } from "../../entities/User";

export interface IUserService {
    login(email: string, password: string): Promise<string>;
    register(name: string, email: string, password: string, role: string, phoneNumber: string): Promise<string>;
    getAllUsers(): Promise<User[]>;
    deleteUser(id: string): Promise<string>;
    updateUser(id: string, user: User): Promise<string>;
}