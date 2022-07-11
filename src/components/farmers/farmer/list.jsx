import { Layout, Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getfarmers } from "../../../state/slices/farmer.slice";
import DashCard from "../../common/card";
import { columns} from "./helper";

function ListFarmers() {
    const { get } = useSelector((state) => state.farmer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getfarmers());
        /* eslint-disable-next-line */
    },[])
    return (
        <Layout className="h-[100vh] w-full ">
            <div className="flex items-center justify-around">
              <DashCard title="Total Farmers" subtitle="28 Today"  number="1,250"/>
              <DashCard title="Total Animals"   number="8,500"/>
              <DashCard title="Number Of services"   number="6"/>
              <DashCard title="Schedules In This Week"   number="6"/>
            </div>
            <h2 className="mt-10">Farmers</h2>
            <Table columns={columns} dataSource={get.data} loading={false} />
        </Layout>
    );
}
export default ListFarmers;
