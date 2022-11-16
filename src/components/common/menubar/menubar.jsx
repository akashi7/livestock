import { Anchor, Layout } from "antd";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MenuContext } from "../../../context/menuContext";
import "./menu.css";

const { Link } = Anchor;

export default function MenuBar() {
  const { menuBar } = useContext(MenuContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const handleClick = (e, link) => {
    e.preventDefault();
    navigate(link);
  };
  const { Content } = Layout;
  return (
    <Content className={`menuBar`}>
      <Anchor affix={false} onClick={handleClick} className="v">
        <Link href={`/vt/animal/${id}`} title="Details" />
        <Link href="#components-anchor-demo-static" title="Feeding" />
      </Anchor>
    </Content>
  );
}
