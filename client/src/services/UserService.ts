import { AxiosResponse } from "axios";
import $api from "../http";
import { IUser } from "../models/interfaces";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>("/client");
    }
}
