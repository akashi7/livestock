import { Route, Routes } from "react-router";
import ForgotPassword from "./components/auth/forgotPassword";
import Login from "./components/auth/login";
import ResetPassword from "./components/auth/resetPassword";
import DashRoutes from "./routes/dashboardRoutes";
import SignUp from "./components/auth/signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={< SignUp/>} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/vt/*" element={<DashRoutes />} />
    </Routes>
  );
}
export default App;
