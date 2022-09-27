import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
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
    title: 'Category',
    dataIndex: 'animalCategoryId',
    key: 'animalCategoryId',
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
          <p>
            More <DownOutlined />
          </p>
        </Dropdown>
      </Space>
    ),
  },
];
export const AnimalsGroupcolumns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Animal Category',
    dataIndex: 'animalCategoryId',
    key: 'animalCategoryId',
  },
  {
    title: 'Purpose',
    dataIndex: 'purposeId',
    key: 'purposeId',
  },
  {
    title: 'Number"',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Birthdate',
    dataIndex: 'birthdate',
    key: 'birthdate',
  },
  {
    title: 'Female Number',
    dataIndex: 'maleNumber',
    key: 'maleNumber',
  },
  {
    title: 'Male Number',
    dataIndex: 'maleNumber',
    key: 'maleNumber',
  },
  {
    title: 'parent',
    dataIndex: 'parent',
    key: 'parent',
  },
  {
    title: 'Expected_exit',
    dataIndex: 'expected_exit',
    key: 'expected_exit',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Dropdown overlay={menu}>
          <p>
            More <DownOutlined />
          </p>
        </Dropdown>
      </Space>
    ),
  },
];
export const AnimalsSickbaycolumns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'animalId',
    key: 'animalId',
  },
  {
    title: 'Animal Category',
    dataIndex: 'animalCategoryId',
    key: 'animalCategoryId',
  },
  {
    title: 'Group Animal',
    dataIndex: 'groupAnimalId',
    key: 'groupAnimalId',
  },
  {
    title: 'Intervention"',
    dataIndex: 'intervention',
    key: 'intervention',
  },
  {
    title: 'Observation',
    dataIndex: 'observation',
    key: 'observation',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Medicine',
    dataIndex: 'medicine_name',
    key: 'medicine_name',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Dropdown overlay={menu}>
          <p>
            More <DownOutlined />
          </p>
        </Dropdown>
      </Space>
    ),
  },
];

export const AnimalCategoryColums = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Short Code',
    dataIndex: 'shortcode',
    key: 'shortcode',
  },
];

// "onsetDate":"2022-05-05",
//    "animalId":1,
//    "animalCategoryId":2,
//    "groupAnimalId":1,
//    "quantity":12,
//    "feedId":1

export const AnimalFeedColmns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Date',
    dataIndex: 'onsetDate',
    key: 'onsetDate',
  },
  {
    title: 'AnimalId',
    dataIndex: 'animalId',
    key: 'animalId',
  },
  {
    title: 'Feed name',
    dataIndex: 'feed_name',
    key: 'feed_name',
  },
  {
    title: 'Group animal',
    dataIndex: 'groupAnimalId',
    key: 'groupAnimalId',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

//hazawi singer
