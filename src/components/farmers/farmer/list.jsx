import { Layout, Table } from "antd";
import { useNavigate } from "react-router-dom";
import DashCard from "../../common/card";
import { columns, data } from "./helper";

function ListFarmers() {
    return (
        <Layout className="h-[100vh] w-full ">
            <div className="flex items-center justify-around">
              <DashCard title="Total Farmers" subtitle="28 Today"  number="1,250"/>
              <DashCard title="Total Animals"   number="8,500"/>
              <DashCard title="Number Of services"   number="6"/>
              <DashCard title="Schedules In This Week"   number="6"/>
            </div>
            <h2 className="mt-10">Farmers</h2>
            <Table columns={columns} dataSource={data} />
        </Layout>
    );
}
export default ListFarmers;
