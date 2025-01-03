import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CoursesPage from "./pages/CoursesPage";
import ClassmatesPage from "./pages/ClassmatesPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<div>home </div>}></Route>
                    <Route path="courses" element={<CoursesPage />}></Route>
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
