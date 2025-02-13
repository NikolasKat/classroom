import { AxiosResponse } from "axios";
import { SubjectCreateResponse } from "../models/response/AuthResponse";
import $api from "../http";

export default class SubjectService {
    static async addSubject(
        subjectName: string,
        teacherID: string,
    ): Promise<AxiosResponse<SubjectCreateResponse>> {
        return $api.post<SubjectCreateResponse>("/addSubject", {
            subjectName,
            teacherID,
        });
    }
    static async connectStudent(
        subjectId: string,
        userId: string,
    ): Promise<AxiosResponse<SubjectCreateResponse>> {
        return $api.put("/connectStudent", { subjectId, userId });
    }
    static async disconnectStudent(
        subjectId: string,
        userId: string,
    ): Promise<AxiosResponse<SubjectCreateResponse>> {
        return $api.put("/disconnectStudent", { subjectId, userId });
    }
}
