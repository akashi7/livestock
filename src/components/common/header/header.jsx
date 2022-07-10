import { Layout, Dropdown, Space } from "antd";
import { RightOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { DropMenu } from "./menu";
const Navbar = () => {
    const { Header } = Layout;
    return (
        <Header
            className="h-[100vh] w-full flex justify-between shadow-sm"
            style={{ background: "white"}}
        >
            <div className="w-1/6 flex items-center justify-center">
                <h2>Dashboard </h2>
                <RightOutlined className="ml-[10px] mt-[-5px]" />
            </div>
            <div className="w-2/6 flex items-center justify-center"></div>
            <div className="w-3/6  justify-end items-center flex mr-[-40px] p-2">
                <section className="w-40 flex items-center">
                    <UserOutlined
                        className="cursor-pointer  radius-full"
                        style={{ fontSize: "20px", color: "#1D4ED8" }}
                    />
                    <Dropdown overlay={DropMenu} className="ml-3 mt-1">
                        <div onClick={(e) => e.preventDefault()}>
                            Admin
                            <Space className="ml-1">
                                <DownOutlined />
                            </Space>
                        </div>
                    </Dropdown>
                </section>
            </div>
        </Header>
    );
};
export default Navbar;
