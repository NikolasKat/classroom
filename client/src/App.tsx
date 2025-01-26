import { Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AllCoursesPage from "./pages/AllCoursesPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import ClassmatesPage from "./pages/ClassmatesPage";
import CoursePage from "./pages/CoursePage";
import { useEffect } from "react";
import { checkAuth } from "./store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authData = useSelector((state: unknown) => state.user.isAuth);
    const loginData = useSelector((state: unknown) => state.user.isLogin);

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
