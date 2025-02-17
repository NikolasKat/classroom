export enum ETypeOfTask {
    SCHEDULE = "SCHEDULE",
    LAB = "LAB",
    NOTES = "NOTES",
}

export enum ERoles {
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
}

export interface AlertText {
    text: string;
}

export interface RegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userRole: ERoles;
    img?: string;
}

export type LoginData = Pick<RegistrationData, "email" | "password">;
export type UserCardData = Pick<
    RegistrationData,
    "firstName" | "lastName" | "img" | "userRole"
>;

export interface ConnectedUsers {
    _id: string;
    lastName: string;
}

interface Tasks {
    type: ETypeOfTask;
    name: string;
}

export interface SubjectData {
    subjectName: string;
    teacher: {
        email: string;
        firstName: string;
        lastName: string;
    };
    connectedUsers: ConnectedUsers[];
    tasks: Tasks[];
    _id: string;
}

export interface TaskData {
    id: string;
    title: string;
    subjectName: string;
    type: ETypeOfTask;
    files: string[];
}

export interface IUser {
    email: string;
    userRole: ERoles;
    isActivated: boolean;
    id: string;
}

export interface IUserSlice {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
    isLogin: boolean;
}
