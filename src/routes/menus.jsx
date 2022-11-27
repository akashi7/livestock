import {
  AccountBookOutlined,
  InfoCircleOutlined,
  StarOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const mainRoute = `vt`;

const menus = [
  {
    label: `Dashboard`,
    key: `/${mainRoute}/`,
    icon: <StarOutlined />,
  },
  {
    label: `farmers`,
    icon: <UsergroupAddOutlined />,
    children: [
      {
        label: `Create`,
        key: `/${mainRoute}/add-farmer`,
      },
      {
        label: `Farmers List`,
        key: `/${mainRoute}/`,
      },
    ],
  },
  {
    label: `Farms`,
    icon: <InfoCircleOutlined />,
    children: [
      {
        label: `Create`,
        key: `/${mainRoute}/add-farm`,
      },
      {
        label: `farms List`,
        key: `/${mainRoute}/list-farms`,
      },
    ],
  },

  {
    label: `Animals`,
    icon: <InfoCircleOutlined />,
    children: [
      {
        label: `Create New`,
        children: [
          {
            label: `Animal`,
            key: `/${mainRoute}/add-animal`,
          },
          {
            label: `Animal Group`,
            key: `/${mainRoute}/add-animal-group`,
          },
          // {
          //   label: `Sickbay`,
          //   key: `/${mainRoute}/add-sickbay`,
          // },
          // {
          //   label: `Vaccinate`,
          //   key: `/${mainRoute}/vaccinate`,
          // },
        ],
      },
      {
        label: `Animals List`,
        key: `/${mainRoute}/list-animals`,
      },
      // {
      //   label: `Animals Groups List`,
      //   key: `/${mainRoute}/list-animalsGroup`,
      // },
      // {
      //   label: `Sickbay List`,
      //   key: `/${mainRoute}/list-sickbay`,
      // },
      // {
      //   label: `List of  vaccinations`,
      //   key: `/${mainRoute}/list-vaccination`,
      // },
    ],
  },
  // {
  //   label: `Expenses`,
  //   icon: <AccountBookOutlined />,
  //   children: [
  //     {
  //       label: `Create Animal expenses`,
  //       key: `/${mainRoute}/add-animal-expense`,
  //     },
  //     {
  //       label: `List Animal Expenses`,
  //       key: `/${mainRoute}/list-animal-expenses`,
  //     },
  //     {
  //       label: `Create Farm expense `,
  //       key: `/${mainRoute}/create-farm-expenses`,
  //     },
  //   ],
  // },
  // {
  //   label: `Animal Category`,
  //   icon: <AccountBookOutlined />,
  //   children: [
  //     {
  //       label: `Create`,
  //       key: `/${mainRoute}/create-category`,
  //     },
  //     {
  //       label: `List`,
  //       key: `/${mainRoute}/list-category`,
  //     },
  //   ],
  // },
  // {
  //   label: `Animal Feed`,
  //   icon: <AccountBookOutlined />,
  //   children: [
  //     {
  //       label: `Create`,
  //       key: `/${mainRoute}/create-animal-feed`,
  //     },
  //     {
  //       label: `List`,
  //       key: `/${mainRoute}/list-animal-feed`,
  //     },
  //   ],
  // },
  // {
  //   label: `Events`,
  //   icon: <AccountBookOutlined />,
  //   children: [
  //     {
  //       label: `Create`,
  //       key: `/${mainRoute}/create-event`,
  //     },
  //     {
  //       label: `List`,
  //       key: `/${mainRoute}/event-list`,
  //     },
  //   ],
  // },
  {
    label: `Reports`,
    icon: <AccountBookOutlined />,
    children: [
      {
        label: `Farm Reports`,
        key: `/${mainRoute}/farm-reports`,
      },
      // {
      //   label: `Animal Reports`,
      //   key: `/${mainRoute}/animal-reports`,
      // },
    ],
  },
];
export const getMenus = () => {
  return menus;
};

export const getAnchors = (id) => {
  return [
    {
      label: `Details`,
      key: `/${mainRoute}/animal/${id}`,
    },
    {
      label: "Feeding",
      key: `/${mainRoute}/list-animal-feed`,
    },
    {
      label: "SickBay",
      key: `/${mainRoute}/list-sickbay`,
    },
    {
      label: "Task",
      key: `/${mainRoute}/event-list`,
    },
    {
      label: "Vaccinating",
      key: `/${mainRoute}/list-vaccination`,
    },
    {
      label: "Treatement",
      key: `/${mainRoute}/animal-treatments`,
    },
    {
      label: "Account",
      key: `/${mainRoute}/animal-accounts`,
    },
    {
      label: "Measurement",
      key: `/${mainRoute}/animal-measures`,
    },
  ];
};

///create-animal-feed
///animal-accounts
