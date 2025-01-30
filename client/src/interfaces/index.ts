export interface AlertText {
    text: string;
}

export interface RegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export type LoginData = Pick<RegistrationData, "email" | "password">;
