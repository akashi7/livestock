import {
  AccountBookOutlined,
  InfoCircleOutlined,
  StarOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'

const mainRoute = `vt`

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
          // {
          //   label: `Animal Group`,
          //   key: `/${mainRoute}/add-animal-group`,
          // },
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
      {
        label: `Group list`,
        key: `/${mainRoute}/list-animalsGroup`,
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
      {
        label: `Due dates`,
        key: `/${mainRoute}/report/duedates`,
      },
      {
        label: `Reproduction`,
        key: `/${mainRoute}/report/reproduction`,
      },
    ],
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
      label: 'Vaccinating',
      key: `/${mainRoute}/list-vaccination`,
    },
    {
      label: 'Treatement',
      key: `/${mainRoute}/animal-treatments`,
    },
    {
      label: 'Account',
      key: `/${mainRoute}/animal-accounts`,
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
      label: 'Measurement',
      key: `/${mainRoute}/animal-measures`,
    },
    {
      label: 'Yield',
      key: `/${mainRoute}/animal-yields`,
    },
    {
      label: 'Breeding',
      key: `/${mainRoute}/animal-breeds`,
    },
  ]
}

export const getGroupAnchors = (id) => {
  return [
    {
      label: `Details`,
      key: `/${mainRoute}/groupanimal/${id}`,
    },
    {
      label: 'Notes',
      key: `/${mainRoute}/groupanimal`,
    },
    {
      label: 'Feeding',
      key: `/${mainRoute}/groupanimal`,
    },
    {
      label: 'SickBay',
      key: `/${mainRoute}/groupanimal`,
    },
    {
      label: 'Task',
      key: `/${mainRoute}/groupanimal`,
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
