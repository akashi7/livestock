import { Layout, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { columns, data } from "./helper";

function ListFarmers() {
    return (
        <Layout className="h-[100vh] w-full">
            <h2>Farmers</h2>
            <Table columns={columns} dataSource={data} />
        </Layout>
    );
}
export default ListFarmers;
