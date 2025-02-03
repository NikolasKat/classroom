import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SubjectCardData } from "../../models/interfaces";

const initialState = {
    subjects: [] as SubjectCardData[],
};

export const addSubject = createAsyncThunk(
    "subjects/addSubject",
    async function () {},
);

export const deleteSubject = createAsyncThunk(
    "subjects/deleteSubject",
    async function () {},
);

export const subjectsSlice = createSlice({
    name: "subjects",
    initialState,
    reducers: {},
    // extraReducers(builder) {},
});

// export const {} = subjectsSlice.actions;
export default subjectsSlice.reducer;
