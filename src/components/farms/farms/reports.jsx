import { Layout, Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFarmReport } from "../../../state/slices/farm.slice";
import { columnsReports } from "./helper";

function ListFarmReports() {
  const dispatch = useDispatch();
  const { farmReport } = useSelector((state) => state.farm);
  useEffect(() => {
    dispatch(GetFarmReport());
    /* eslint-disable-next-line */
  }, []);
  return (
    <Layout className="h-[100vh] w-full">
      <Table
        columns={columnsReports}
        dataSource={farmReport.data}
        loading={farmReport.loading}
      />
    </Layout>
  );
}
export default ListFarmReports;
