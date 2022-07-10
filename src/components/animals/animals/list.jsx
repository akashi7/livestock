import { Layout, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { columns, data } from "./helper";

function ListAnimals() {
    const navigate = useNavigate();
    return (
        <Layout className="h-[100vh] w-full">
             <Table columns={columns} dataSource={data} />
        </Layout>
    );
}
export default ListAnimals;
