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
}
