import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/login";
function AuthRoutes() {
    return (

        <Routes>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    );
}
export default AuthRoutes;
