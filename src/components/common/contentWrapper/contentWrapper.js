import { Layout } from "antd";

const ContentWrapper = ({ children }) => {
    const { Content } = Layout;
    return (
        <Content className="h-[100vh] w-full bg-[#E5E5E5;] p-2">
            <div className="w-full h-[650px]">
                {children}
            </div>
        </Content>
    );
};
export default ContentWrapper;
