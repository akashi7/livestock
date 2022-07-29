import { Space, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
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
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Earring_num',
    dataIndex: 'earring_num',
    key: 'earring_num',
  },
  {
    title: 'Gender',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Animal Cat',
    dataIndex: 'animal_cat',
    key: 'animal_cat',
  },
  {
    title: 'Birth Date',
    dataIndex: 'birthdate',
    key: 'birthdate',
  },
  {
    title: 'Parent',
    dataIndex: 'parent',
    key: 'parent',
  },
  {
    title: 'Expected Exit',
    dataIndex: 'expected_exit',
    key: 'expected_exit',
  },
  {
    title: 'Action',
    key: 'action',
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
];
