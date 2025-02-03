import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
import { ERoles } from "../models/interfaces";

export default class AuthService {
    static async login(
        email: string,
        password: string,
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/login", { email, password });
    }

    static async registration(
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        userRole: ERoles,
        img?: string,
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/registration", {
            email,
            password,
            firstName,
            lastName,
            userRole,
            img,
        });
    }

    static async logout(): Promise<void> {
        return $api.post("/logout");
    }
}
