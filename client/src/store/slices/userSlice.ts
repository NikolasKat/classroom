import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import { API_URL } from "../../http";

export interface IUserSlice {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
}

interface ILogin {
    email: string;
    password: string;
}

interface IRegistration {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const initialState: IUserSlice = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
};

export const login = createAsyncThunk(
    "user/login",
    async function (data: ILogin, { rejectWithValue, dispatch }) {
        try {
            const { email, password } = data;
            const response = await AuthService.login(email, password);
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setAuth(true));
            dispatch(setUser(response.data.user));
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const registration = createAsyncThunk(
    "user/registration",
    async function (data: IRegistration, { rejectWithValue, dispatch }) {
        try {
            const { email, password, firstName, lastName } = data;
            const response = await AuthService.registration(
                email,
                password,
                firstName,
                lastName,
            );
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setAuth(true));
            dispatch(setUser(response.data.user));
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const logout = createAsyncThunk(
    "user/logout",
    async function (_data, { rejectWithValue, dispatch }) {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("token");
            dispatch(setAuth(false));
            dispatch(setUser({} as IUser));
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const checkAuth = createAsyncThunk(
    "user/checkAuth",
    async function (_data, { rejectWithValue, dispatch }) {
        userSlice.actions.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(
                `${API_URL}/refresh`,
                { withCredentials: true },
            );
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setAuth(true));
            dispatch(setUser(response.data.user));
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            userSlice.actions.setLoading(false);
        }
    },
);

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
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export const { setAuth, setUser } = userSlice.actions;
export default userSlice.reducer;
