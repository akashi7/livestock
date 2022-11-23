import { Layout, Menu } from "antd";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MenuContext } from "../../../context/menuContext";
import { getAnchors } from "../../../routes/menus";
import "./menu.css";

export default function MenuBar() {
  const { menuBar } = useContext(MenuContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const Id = id ? id : localStorage.getItem("id");
  const handleNavigation = (e) => {
    navigate(e.key);
  };
  const { Content } = Layout;
  return (
    <Content className={`menuBar`}>
      <Menu
        items={getAnchors(Id)}
        mode="inline"
        onClick={handleNavigation}
        className="tags"
      />
    </Content>
  );
}
