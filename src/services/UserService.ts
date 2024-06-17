import { inject, injectable } from "inversify";
import { User } from "../entities/User";
import { IUserService } from "../interfaces/User/IUserService";
import { IUserRepository } from "../interfaces/User/IUserRepository";
import { INTERFACE_TYPE } from "../utils";
import { IToken } from "../interfaces/IToken";
import { IHash } from "../interfaces/IHash";

@injectable()
export class UserService implements IUserService {

    private repository : IUserRepository;
    private token: IToken;
    private hash: IHash;

    constructor(@inject(INTERFACE_TYPE.UserRepository) repository: IUserRepository,
        @inject(INTERFACE_TYPE.Token) token: IToken,
        @inject(INTERFACE_TYPE.Hash) hash: IHash){
        this.repository = repository;
        this.token = token;
        this.hash = hash;
    }

    async login(email: string, password: string): Promise<string> {
        const user = await this.repository.login(email);
        if(user){
            const isPasswordMatch = await this.hash.comparePassword(password, user.password);

            if(isPasswordMatch){
                const token = await this.token.generateToken(user);
                return token;
            } else {
                throw new Error("Invalid email or password");
            }
        } else {
            throw new Error("User not found");
        }
    }
    async register(name: string, email: string, password: string, phoneNumber: string): Promise<string> {
        const hashedPassword = await this.hash.hashPassword(password);
        const user = await this.repository.register(name, email, password, phoneNumber);
        if(user){
            return "User registered successfully";
        } else {
            throw new Error("User not registered");
        }
    }
    async getAllUsers(): Promise<User[]> {
        const users = await this.repository.getAllUsers();
        return users;
    }
    async deleteUser(id: string): Promise<string> {
        const result = await this.repository.deleteUser(id);
        if (result) {
            return "User deleted successfully";
        } else {
            throw new Error("User not deleted");
        }
    }
    async updateUser(id: string, user: User): Promise<string> {
        const result = await this.repository.updateUser(id, user);
        if (result) {
            return "User updated successfully";
        } else {
            throw new Error("User not updated");
        }
    }
}