import {Layout, Menu } from "antd";
import { StarOutlined} from '@ant-design/icons';
import { useState } from "react";
const Sidebar = () => {
    const { Sider } = Layout;
    const [collapse,setCollapse]=useState(false);
    const items = [
        {
            label: "Dashboard",
            key: "/",
            icon:<StarOutlined/>,
            children: [
                {
                    label: "add User",
                    key: "/add",
                },
                {
                    label: "add User",
                    key: "/add",
                },
            ],
        },
        {
            label: "Home",
            key: "/home",
            icon:<StarOutlined/>,
            children: [
                {
                    label: "add User",
                    key: "/add",
                },
                {
                    label: "add User",
                    key: "/add",
                },
            ],
        },
    ];
    return (
        <Sider
            width={256}
            collapsible
            onCollapse={()=>setCollapse(!collapse)}
            collapsed={collapse}
            className="h-[100vh] bg-white"
            style={{background:"#FAFBFE"}}
            
        >
            <Menu items={items} mode="inline"/>
        </Sider>
    );
};
export default Sidebar;
