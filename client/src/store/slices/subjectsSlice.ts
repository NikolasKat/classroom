import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SubjectData } from "../../models/interfaces";
import SubjectService from "../../services/SubjectService";
import store from "../store";

const initialState = {
    subjects: [] as SubjectData[],
};

export const addSubject = createAsyncThunk(
    "subjects/addSubject",
    async function (data: unknown, { rejectWithValue, dispatch }) {
        try {
            const { subjectName } = data;

            const globalStore = store.getState();
            const teacherID = globalStore.user.user.id;

            const response = await SubjectService.addSubject(
                subjectName,
                teacherID,
            );

            dispatch(setSubjects(response.data.subjects));
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const connectStudent = createAsyncThunk(
    "subjects/connectStudent",
    async function (data, { rejectWithValue, dispatch }) {
        try {
            const { id } = data;
            const globalStore = store.getState();
            const userId = globalStore.user.user.id;
            const response = await SubjectService.connectStudent(id, userId);
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const disconnectStudent = createAsyncThunk(
    "subjects/disconnectStudent",
    async function (data, { rejectWithValue, dispatch }) {
        try {
            const { id } = data;
            const globalStore = store.getState();
            const userId = globalStore.user.user.id;
            const response = await SubjectService.disconnectStudent(id, userId);
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

// export const deleteSubject = createAsyncThunk(
//     "subjects/deleteSubject",
//     async function () {},
// );

export const subjectsSlice = createSlice({
    name: "subjects",
    initialState,
    reducers: {
        setSubjects(state, action) {
            state.subjects = action.payload;
        },
    },
    // extraReducers(builder) {},
});

export const { setSubjects } = subjectsSlice.actions;
export default subjectsSlice.reducer;
