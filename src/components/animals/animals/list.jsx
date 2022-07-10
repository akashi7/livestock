import { Layout } from "antd";
import { useNavigate } from "react-router-dom";

function ListAnimals() {
    const navigate = useNavigate();
    return (
        <Layout className="h-[100vh]  items-center flex">
              list animals
        </Layout>
    );
}
export default ListAnimals;
