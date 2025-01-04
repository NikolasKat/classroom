import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AllCoursesPage from "./pages/AllCoursesPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import ClassmatesPage from "./pages/ClassmatesPage";

function App() {
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
