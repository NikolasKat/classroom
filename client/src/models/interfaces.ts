export enum ETypeOfTask {
    SCHEDULE = "schedule",
    LAB = "lab",
    NOTES = "notes",
}

export interface AlertText {
    text: string;
}

export interface RegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    img?: string;
}

export type LoginData = Pick<RegistrationData, "email" | "password">;
export type UserCardData = Pick<
    RegistrationData,
    "firstName" | "lastName" | "img"
>;

export interface SubjectCardData {
    id: string;
    subjectName: string;
    teacherName: string;
    bgImg: string;
    color: string;
    isConnected: boolean;
}

export interface TaskCardData {
    id: string;
    title: string;
    subjectName: string;
    type: ETypeOfTask;
    files: string[];
}

export interface IUser {
    email: string;
    isActivated: boolean;
    id: string;
}

export interface IUserSlice {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
    isLogin: boolean;
}
