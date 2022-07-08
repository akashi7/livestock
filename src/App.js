// import Navbar from "./components/common/header/header";
// import Sidebar from "./components/common/sidebar/sidebar";
// import { Layout } from 'antd'
// import ContentWrapper from "./components/common/contentWrapper/contentWrapper";
import { Routes, Route } from 'react-router'
import Login from "./components/auth/login";
function App() {
  return (
    <Routes>
      <Route path="/"  element={<Login />}></Route>
      <Route path="/login"  element={<Login />}></Route>
    </Routes>
  );
}
export default App;
