import {Space, Dropdown, Menu } from "antd"
import {DownOutlined} from '@ant-design/icons';
const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: 'Action 1',
        },
        {
          key: '2',
          label: 'Action 2',
        },
      ]}
    />
  );
export const columns = [
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
    render: (text) => text,
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
        <Space size="middle">
        <Dropdown overlay={menu}>
          <a>
            More <DownOutlined />
          </a>
        </Dropdown>
      </Space>
    ),
  },
]
export const data = [
  {
    firstname: "firstname",
    lastname: "John Brown",
    gender: 32,
    phone: "250787612847",
    nid: "1234565",
    farmer_cat:"1234565",
    province:'North',
    district:'Musanze',
    sector:'Muhoza',
    cell:'Musanze',
    village:'Byimana'
  },
  {
    firstname: "firstname",
    lastname: "John Brown",
    gender: 32,
    phone: "250787612847",
    nid: "1234565",
    farmer_cat:"1234565",
    province:'North',
    district:'Musanze',
    sector:'Muhoza',
    cell:'Musanze',
    village:'Byimana'
  },
]