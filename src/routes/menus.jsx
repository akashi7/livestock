import {
    StarOutlined,
    UsergroupAddOutlined,
    InfoCircleOutlined,
    AccountBookOutlined
} from "@ant-design/icons";
const menus = [
    {
        label: "Dashboard",
        key: "/vt/",
        icon: <StarOutlined />,
    },
    {
        label: "farmers",
        key: "/vt/add-farmer",
        icon: <UsergroupAddOutlined />,
        children: [
            {
                label: "Create",
                key: "/vt/add-farmer",
            },
            {
                label: "List",
                key: "/vt/",
            },
        ],
    },
    {
        label: "Animals",
        key: "/vt/add-animal",
        icon: <InfoCircleOutlined/>,
        children: [
            {
                label: "Create",
                key: "/vt/add-animal",
            },
            {
                label: "List",
                key: "/vt/list-animals",
            },
        ],
    },
    {
        label: "Farms",
        key: "/vt/add-farm",
        icon: <InfoCircleOutlined/>,
        children: [
            {
                label: "Create",
                key: "/vt/add-farm",
            },
            {
                label: "List",
                key: "/vt/list-farms",
            },
        ],
    },
    {
        label: "Expenses",
        key: "/vt/add-expense",
        icon: <AccountBookOutlined />,
        children: [
            {
                label: "Create",
                key: "/vt/add-expense",
            },
            {
                label: "List",
                key: "/vt/list-expenses",
            },
        ],
    },
];
export const getMenus = () => {
    return menus;
};
