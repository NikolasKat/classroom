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
    "firstName" | "lastName" | "img"
>;

export interface SubjectData {
    id: string;
    subjectName: string;
    teacherEmail: string;
    bgImg: string;
    color: string;
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
