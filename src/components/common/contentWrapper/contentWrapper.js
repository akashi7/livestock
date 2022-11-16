import { Layout } from "antd";
import "./contentWrapper.css";

const ContentWrapper = ({ children }) => {
  const { Content } = Layout;
  return (
    <Content className="wrapper">
      <div className="k">{children}</div>
    </Content>
  );
};
export default ContentWrapper;
