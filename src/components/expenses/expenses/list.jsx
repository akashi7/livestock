import { Layout } from "antd";
import { useNavigate } from "react-router-dom";

function ListExpenses() {
    const navigate = useNavigate();
    return (
        <Layout className="h-[100vh]  items-center flex">list expenses</Layout>
    );
}
export default ListExpenses;
