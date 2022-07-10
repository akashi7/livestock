import { Layout } from "antd";

const ContentWrapper = ({ children }) => {
    const { Content } = Layout;
    return (
        <Content className="h-[100%] w-full bg-[#E5E5E5;] p-6">
            <div className="w-full h-[100%]  mt-4">
                {children}
            </div>
        </Content>
    );
};
export default ContentWrapper;
