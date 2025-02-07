import { IUser, SubjectData } from "../interfaces";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface SubjectCreateResponse {
    subjects: SubjectData[];
}
