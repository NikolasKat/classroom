import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import subjectsReducer from "./slices/subjectsSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        subjects: subjectsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
