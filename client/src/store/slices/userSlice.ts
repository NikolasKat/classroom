import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface IUserSlice {
    user: IUser;
    isAuth: boolean;
}

const initialState: IUserSlice = {
    user: {} as IUser,
    isAuth: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
    },
});

export const { setAuth, setUser } = userSlice.actions;
export default userSlice.reducer;
