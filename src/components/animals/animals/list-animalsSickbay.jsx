import { Layout, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSickBy,
  getAllAnimalsSickbay,
  getAnimalCatgories,
  GetMedecinesData,
  SeeOneAnimal,
} from "../../../state/slices/animal.slice";
import AnimalCard from "../../common/Cards";
import MenuBar from "../../common/menubar/menubar";
import "../animal.css";
import { AddSeekBayModal } from "../modals";
import { AnimalsSickbaycolumns } from "./helper";

function ListAnimalsSickBay() {
  const dispatch = useDispatch();
  const { animalsSickBayData, animal, medecines } = useSelector(
    (state) => state.animal
  );

  const id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(getAllAnimalsSickbay({ param: id }));
    dispatch(SeeOneAnimal({ params: id }));
    dispatch(getAnimalCatgories());
    dispatch(GetMedecinesData());
    /* eslint-disable-next-line */
  }, []);

  const [toogle, setToogle] = useState(false);
  const animalCatgories = useSelector((state) => state.animal.categories);
  const { loading } = useSelector((state) => state.animal.createSickBy);

  function Toogle() {
    setToogle(!toogle);
  }

  return (
    <Layout className="layout-container">
      <div className="main-container">
        <MenuBar />
        <div className="leftContainer">
          <AnimalCard props={animal.data} />
          <br />
          <div style={{ margin: "10px" }}>
            <button
              type="button"
              className="w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={Toogle}
            >
              Add new
            </button>
            {toogle && (
              <AddSeekBayModal
                Toogle={Toogle}
                toogle={toogle}
                categories={animalCatgories}
                dispatch={dispatch}
                createSickBy={createSickBy}
                loading={loading}
                id={id}
                medecines={medecines}
                getAllAnimalsSickbay={getAllAnimalsSickbay}
              />
            )}
          </div>
          <br />
          <div style={{ margin: "10px" }}>
            <Table
              columns={AnimalsSickbaycolumns}
              dataSource={animalsSickBayData.data}
              loading={animalsSickBayData.loading}
              pagination={{
                defaultPageSize: 5,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ListAnimalsSickBay;
