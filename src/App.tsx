import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Header />}>
               <Route index element={<HomePage />}></Route>
            </Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
         </Routes>
      </>
   );
}

export default App;
