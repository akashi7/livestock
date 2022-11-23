import { Layout, Table } from "antd";
import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAnimals, SeeOneAnimal } from "../../../state/slices/animal.slice";
import { getAnimalColums } from "./helper";
import { MenuContext } from "../../../context/menuContext";

function ListAnimals() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ToogleMenu } = useContext(MenuContext);

  const { get } = useSelector((state) => state.animal);
  useEffect(() => {
    dispatch(getAnimals());
    /* eslint-disable-next-line */
  }, []);

  function Dispatch(animals) {
    localStorage.setItem("id", animals.id);
    navigate(`/vt/animal/${animals.id}`);
  }

  return (
    <Layout className="h-[100%] w-full">
      <Table
        columns={getAnimalColums(Dispatch)}
        dataSource={get.data}
        loading={get.loading}
        rowKey={(animals) => animals.id}
      />
    </Layout>
  );
}
export default ListAnimals;
