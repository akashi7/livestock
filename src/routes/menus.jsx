import {
  AccountBookOutlined,
  InfoCircleOutlined,
  StarOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
const menus = [
  {
    label: "Dashboard",
    key: "/vt/",
    icon: <StarOutlined />,
  },
  {
    label: "Farms",
    icon: <InfoCircleOutlined />,
    children: [
      {
        label: "Create",
        key: "/vt/add-farm",
      },
      {
        label: "farms List",
        key: "/vt/list-farms",
      },
    ],
  },
  {
    label: "farmers",
    icon: <UsergroupAddOutlined />,
    children: [
      {
        label: "Create",
        key: "/vt/add-farmer",
      },
      {
        label: "Farmers List",
        key: "/vt/",
      },
    ],
  },
  {
    label: "Animals",
    icon: <InfoCircleOutlined />,
    children: [
      {
        label: "Create New",
        children: [
          {
            label: "Animal",
            key: "/vt/add-animal",
          },
          {
            label: "Animal Group",
            key: "/vt/add-animal-group",
          },
          {
            label: "Sickbay",
            key: "/vt/add-sickbay",
          },
          {
            label: "Vaccinate",
            key: "/vt/vaccinate",
          },
        ],
      },
      {
        label: "All List",
        children: [
          {
            label: "Animals",
            key: "/vt/list-animals",
          },
          {
            label: "Animals Groups",
            key: "/vt/list-animalsGroup",
          },
          {
            label: "Sickbay",
            key: "/vt/list-sickbay",
          },
          {
            label: "List vaccination",
            key: "/vt/list-vaccination",
          },
        ],
      },
    ],
  },
  {
    label: "Expenses",
    icon: <AccountBookOutlined />,
    children: [
      {
        label: "Animal Expense",
        children: [
          {
            label: "Create",
            key: "/vt/add-animal-expense",
          },
          {
            label: "List",
            key: "/vt/list-animal-expenses",
          },
        ],
      },
      {
        label: "Farm expenses",
        children: [
          {
            label: "Create",
            key: "/vt/create-farm-expenses",
          },
        ],
      },
    ],
  },
  {
    label: "Animal Category",
    icon: <AccountBookOutlined />,
    children: [
      {
        label: "Create",
        key: "/vt/create-category",
      },
      {
        label: "List",
        key: "/vt/list-category",
      },
    ],
  },
  {
    label: "Animal Feed",
    icon: <AccountBookOutlined />,
    children: [
      {
        label: "Create",
        key: "/vt/create-animal-feed",
      },
      {
        label: "List",
        key: "/vt/list-animal-feed",
      },
    ],
  },
  {
    label: "Events",
    icon: <AccountBookOutlined />,
    children: [
      {
        label: "Create",
        key: "/vt/create-event",
      },
      {
        label: "List",
        key: "/vt/event-list",
      },
    ],
  },
];
export const getMenus = () => {
  return menus;
};

///create-animal-feed
