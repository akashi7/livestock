import { Layout } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { SeeOneAnimal } from "../../../state/slices/animal.slice";
import MenuBar from "../../common/menubar/menubar";
import AnimalDetails from "./animal-details";

export default function OneAnimal() {
  const { animal } = useSelector((state) => state.animal);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SeeOneAnimal({ params: id }));
  }, [id]);

  return (
    <Layout style={{ height: "100%" }}>
      {animal.loading ? (
        <>Loading....</>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <MenuBar />
          <div style={{ width: "100%", marginLeft: "150px", padding: "20px" }}>
            <AnimalDetails props={animal.data} />
          </div>
        </div>
      )}
    </Layout>
  );
}
