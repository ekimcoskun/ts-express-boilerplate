import { inject, injectable } from "inversify";
import { IUserService } from "../interfaces/User/IUserService";
import { INTERFACE_TYPE } from "../utils";
import { Request, Response } from "express";
import { User } from "../entities/User";

@injectable()
export class UserController {
    private service: IUserService;

    constructor(@inject(INTERFACE_TYPE.UserService) service: IUserService) {
        this.service = service;
    }

    async onLogin(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const token = await this.service.login(email, password);
            if (token) {
                return res.status(200).json({ token });
            } else {
                return res.status(401).json({ message: "Invalid email or password" });
            }
        } catch (err) {
            return res.status(500).json({ err });
        }

    }

    async onRegister(req: Request, res: Response) {
        try {
            const { name, email, password, phone } = req.body;
            const result = await this.service.register(name, email, password, phone);
            if (result) {
                return res.status(201).json({ message: "User created successfully" });
            } else {
                return res.status(400).json({ message: "User already exists" });
            }
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    async onGetAllUsers(req: Request, res: Response) {
        try {
            const users = await this.service.getAllUsers();
            if (users) {
                return res.status(200).json(users);
            } else {
                return res.status(400).json([]);
            }
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    async onUpdateUser(req: Request, res: Response) {
        try {
            const { id, name, email, password, phoneNumber } = req.body;
            const result = await this.service.updateUser(id, { name, email, password, phoneNumber } as User);
            if (result) {
                return res.status(200).json({ message: "User updated successfully" });
            } else {
                return res.status(400).json({ message: "User failed" });
            }
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    async onDeleteUser(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const result = await this.service.deleteUser(id);
            if (result) {
                return res.status(200).json({ message: "User deleted successfully" });
            } else {
                return res.status(400).json({ message: "User not found" });
            }
        } catch (err) {
            return res.status(500).json({ err });
        }
    }
}