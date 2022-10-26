import { Layout, Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListVaccinationsData } from "../../../state/slices/animal.slice";
import { AnimalVaccinationColmns } from "./helper";

function ListVaccinations() {
  const dispatch = useDispatch();
  const { allVaccination } = useSelector((state) => state.animal);
  useEffect(() => {
    dispatch(ListVaccinationsData());
    /* eslint-disable-next-line */
  }, []);
  return (
    <Layout className="h-[100vh] w-full">
      <Table
        columns={AnimalVaccinationColmns}
        dataSource={allVaccination.data}
        loading={allVaccination.loading}
      />
    </Layout>
  );
}
export default ListVaccinations;
