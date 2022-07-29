import {
  AccountBookOutlined,
  InfoCircleOutlined,
  StarOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
const menus = [
  {
    label: 'Dashboard',
    key: '/vt/',
    icon: <StarOutlined />,
  },
  {
    label: 'Farms',
    icon: <InfoCircleOutlined />,
    children: [
      {
        label: 'Create',
        key: '/vt/add-farm',
      },
      {
        label: 'List',
        key: '/vt/list-farms',
      },
    ],
  },
  {
    label: 'farmers',
    icon: <UsergroupAddOutlined />,
    children: [
      {
        label: 'Create',
        key: '/vt/add-farmer',
      },
      {
        label: 'List',
        key: '/vt/',
      },
    ],
  },
  {
    label: 'Animals',
    icon: <InfoCircleOutlined />,
    children: [
      {
        label: 'Create',
        key: '/vt/add-animal',
      },
      {
        label: 'List',
        key: '/vt/list-animals',
      },
    ],
  },
  {
    label: 'Expenses',
    icon: <AccountBookOutlined />,
    children: [
      {
        label: 'Animal Expense',
        children: [
          {
            label: 'Create',
            key: '/vt/add-animal-expense',
          },
          {
            label: 'List',
            key: '/vt/list-animal-expenses',
          },
        ],
      },
      {
        label: 'Farm expenses',
        children: [
          {
            label: 'Create',
            key: '/vt/create-farm-expenses',
          },
        ],
      },
    ],
  },
];
export const getMenus = () => {
  return menus;
};
