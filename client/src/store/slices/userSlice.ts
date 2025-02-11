import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    IUser,
    IUserSlice,
    LoginData,
    RegistrationData,
} from "../../models/interfaces";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import { API_URL } from "../../http";
import { data } from "react-router-dom";

const initialState: IUserSlice = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
    isLogin: false,
};

export const login = createAsyncThunk(
    "user/login",
    async function (data: LoginData, { rejectWithValue, dispatch }) {
        try {
            const { email, password } = data;
            const response = await AuthService.login(email, password);
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setAuth(true));
            dispatch(setLogin(true));
            dispatch(setUser(response.data.user));
            console.log(response.data.user.userRole);
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const registration = createAsyncThunk(
    "user/registration",
    async function (data: RegistrationData, { rejectWithValue, dispatch }) {
        try {
            const { email, password, firstName, lastName, userRole, img } =
                data;
            const response = await AuthService.registration(
                email,
                password,
                firstName,
                lastName,
                userRole,
                img,
            );
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setAuth(true));
            dispatch(setLogin(true));
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
            dispatch(setLogin(false));
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
        dispatch(setLoading(true));
        try {
            const response = await axios.get<AuthResponse>(
                `${API_URL}/refresh`,
                { withCredentials: true },
            );
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setAuth(true));
            dispatch(setLogin(true));
            dispatch(setUser(response.data.user));
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            dispatch(setLoading(false));
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
        setLogin(state, action) {
            state.isLogin = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.rejected, (state) => {
                state.isLogin = false;
                throw new Error();
            })
            .addCase(registration.rejected, (state) => {
                state.isAuth = false;
                throw new Error();
            });
    },
});

export const { setAuth, setUser, setLogin, setLoading } = userSlice.actions;
export default userSlice.reducer;
