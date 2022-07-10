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
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Farmer",
    dataIndex: "farmer",
    key: "farmer",
  },
  {
    title: "Province",
    dataIndex: "province",
    key: "province",
  },
  {
    title: "district",
    dataIndex: "district",
    key: "district",
  },
  {
    title: "Sector",
    dataIndex: "sector",
    key: "sector",
  },
  {
    title: "Cell",
    dataIndex: "cell",
    key: "cell",
  },
  {
    title: "Village",
    dataIndex: "village",
    key: "village",
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
    name: "firstname",
    farmer: "John Brown",
    province:'North',
    district:'Musanze',
    sector:'Muhoza',
    cell:'Musanze',
    village:'Byimana'
  },
]