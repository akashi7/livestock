import { Layout, Table } from "antd";
import { useEffect } from "react";
import MenuBar from "../../common/menubar/menubar";
import { useDispatch, useSelector } from "react-redux";
import {
  SeeOneAnimal,
  TreatmentData,
  CreateTreatmentData,
  GetAccountingData,
} from "../../../state/slices/animal.slice";
import AnimalCard from "../../common/Cards";
import { accountColumns } from "./helper";

export default function ListAccounts() {
  const dispatch = useDispatch();

  const { animal, accountings } = useSelector((state) => state.animal);
  const id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(GetAccountingData({ param: id }));
    dispatch(SeeOneAnimal({ params: id }));
  }, []);

  return (
    <Layout className="layout-container">
      <div className="main-container">
        <MenuBar />
        <div className="leftContainer">
          <AnimalCard props={animal.data} />
          <br />
          <div style={{ margin: "10px" }}>
            <Table
              columns={accountColumns}
              dataSource={accountings.data}
              loading={accountings.loading}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
