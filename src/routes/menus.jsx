import {
  AccountBookOutlined,
  InfoCircleOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons'

const mainRoute = `vt`

const menus = [
  // {
  //   label: `Dashboard`,
  //   key: `/${mainRoute}/`,
  //   icon: <StarOutlined />,
  // },

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
        key: `/${mainRoute}/`,
      },
    ],
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
        key: `/${mainRoute}/farmers-list`,
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
        ],
      },
      {
        label: `Animals List`,
        key: `/${mainRoute}/list-animals`,
      },
      {
        label: `Group list`,
        key: `/${mainRoute}/list-animalsGroup`,
      },
    ],
  },
  {
    label: `Reports`,
    icon: <AccountBookOutlined />,
    children: [
      {
        label: `Treatment`,
        children: [
          {
            label: 'treatment',
            key: `/${mainRoute}/report/treatment`,
          },
          {
            label: 'upcoming',
            key: `/${mainRoute}/report/upcoming_treatment`,
          },
        ],
      },
    ],
  },
  {
    label: 'Users',
    icon: <UserOutlined />,
    key: `/${mainRoute}/users/lists`,
  },
]
export const getMenus = () => {
  return menus
}

export const getAnchors = (id) => {
  return [
    {
      label: `Details`,
      key: `/${mainRoute}/animal/${id}`,
    },
    {
      label: 'Notes',
      key: `/${mainRoute}/animal-notes`,
    },
    {
      label: 'Feeding',
      key: `/${mainRoute}/list-animal-feed`,
    },
    {
      label: 'SickBay',
      key: `/${mainRoute}/list-sickbay`,
    },
    {
      label: 'Task',
      key: `/${mainRoute}/event-list`,
    },
    {
      label: 'Treatement',
      key: `/${mainRoute}/animal-treatments`,
    },

    {
      label: 'Genealogy',
      key: `/${mainRoute}/genealogy`,
    },
    {
      label: 'Offspring',
      key: `/${mainRoute}/offSpring`,
    },
    {
      label: 'Accounting',
      key: `/${mainRoute}/animal-accounts`,
    },
    // {
    //   label: 'Measurement',
    //   key: `/${mainRoute}/animal-measures`,
    // },
    // {
    //   label: 'Yield',
    //   key: `/${mainRoute}/animal-yields`,
    // },
    // {
    //   label: 'Breeding',
    //   key: `/${mainRoute}/animal-breeds`,
    // },
  ]
}

export const getGroupAnchors = (id) => {
  return [
    {
      label: `Details`,
      key: `/${mainRoute}/group-animal/${id}`,
    },
    {
      label: 'Feeding',
      key: `/${mainRoute}/group/feed/${id}`,
    },
    {
      label: 'SickBay',
      key: `/${mainRoute}/group/sickbay/${id}`,
    },
    {
      label: 'Account',
      key: `/${mainRoute}/group/account/${id}`,
    },
    {
      label: 'treatment',
      key: `/${mainRoute}/group/treatment/${id}`,
    },
  ]
}

export const getFarmAnchors = (id) => {
  return [
    {
      label: `Details`,
      key: `/${mainRoute}/farm/${id}`,
    },
    {
      label: `Transaction`,
      key: `/${mainRoute}/farm/${id}/transaction`,
    },
    {
      label: 'Cashflow',
      key: `/${mainRoute}/farm/${id}/cashflow`,
    },
    {
      label: 'Pl statement',
      key: `/${mainRoute}/farm/${id}/pl`,
    },
  ]
}

///create-animal-feed
///animal-accounts
