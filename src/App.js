import { Routes, Route } from "react-router";
import Login from "./components/auth/login";
// import AuthRoutes from "./routes/authRoutes";
import DashRoutes from "./routes/dashboardRoutes";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/vt/*" element={<DashRoutes />}></Route>
            </Routes>
        </>
    );
}
export default App;
