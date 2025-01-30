import { IUser } from "../interfaces";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}
