/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { checkAuth } from "./store/slices/userSlice";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AllCoursesPage from "./pages/AllCoursesPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import ClassmatesPage from "./pages/ClassmatesPage";
import CoursePage from "./pages/CoursePage";

function App() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const authData = useSelector((state: RootState) => state.user.isAuth);
    const loginData = useSelector((state: RootState) => state.user.isLogin);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(checkAuth());
        }
    }, []);

    useEffect(() => {
        if (authData && loginData) {
            navigate("/");
        } else if (!loginData) {
            navigate("/login");
        } else {
            navigate("/register");
        }
    }, [authData, loginData]);

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<div>home </div>}></Route>
                    <Route
                        path="allCourses"
                        element={<AllCoursesPage />}
                    ></Route>
                    <Route path="myCourses" element={<MyCoursesPage />}></Route>
                    <Route path="/:id" element={<CoursePage />} />
                    <Route
                        path="classmates"
                        element={<ClassmatesPage />}
                    ></Route>
                </Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
