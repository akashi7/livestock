import { Layout, Dropdown, Space } from "antd";
import {
    MenuOutlined,
    FullscreenOutlined,
    InfoCircleOutlined,
    UserOutlined,
    DownOutlined,
} from "@ant-design/icons";
import { DropMenu } from "./menu";
const Navbar = () => {
    const { Header } = Layout;
    return (
        <Header
            className="h-[100vh] w-full flex justify-between"
            style={{ background: "white" }}
        >
            <div className="w-1/6  ml-[-40px]">
                <MenuOutlined
                    className="cursor-pointer border-blue border p-2"
                    style={{ fontSize: "15px", color: "#1D4ED8" }}
                />
            </div>
            <div className="w-2/6 flex items-center justify-center">
                <h3 className="text-blue">Receptionist</h3>
            </div>
            <div className="w-3/6  justify-end items-center flex mr-[-40px] p-2">
                <FullscreenOutlined
                    className="cursor-pointer mr-10  border-blue border p-2"
                    style={{ fontSize: "15px" }}
                />
                <section className="w-40 flex items-center ml-10">
                    <InfoCircleOutlined
                        className="cursor-pointer mr-2 bg-blue rounded-full  radius-full p-2"
                        style={{ fontSize: "15px", color: "white" }}
                    />
                    <span className="text-blue">Help</span>
                </section>
                <section className="w-40 flex items-center">
                    <UserOutlined
                        className="cursor-pointer  radius-full p-2"
                        style={{ fontSize: "20px", color: "#1D4ED8" }}
                    />
                    <Dropdown overlay={DropMenu} className="ml-3">
                        <p onClick={(e) => e.preventDefault()}>
                            <Space>
                                Admin
                                <DownOutlined />
                            </Space>
                        </p>
                    </Dropdown>
                </section>
            </div>
        </Header>
    );
};
export default Navbar;
