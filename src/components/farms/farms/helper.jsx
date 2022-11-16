import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "Action 1",
      },
      {
        key: "2",
        label: "Action 2",
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
          <p>
            More <DownOutlined />
          </p>
        </Dropdown>
      </Space>
    ),
  },
];
export const data = [
  {
    name: "firstname",
    farmer: "John Brown",
    province: "North",
    district: "Musanze",
    sector: "Muhoza",
    cell: "Musanze",
    village: "Byimana",
  },
];

export const columnsReports = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Age In Days",
    dataIndex: "ageInDays",
    key: "ageInDays",
  },
  {
    title: "Animal Category",
    dataIndex: "animalCategory",
    key: "animalCategory",
  },
  {
    title: "Earring num",
    dataIndex: "earring_num",
    key: "earring_num",
  },
  {
    title: "Farm name",
    dataIndex: "farm_name",
    key: "farm_name",
  },
  {
    title: "Farmer Fname",
    dataIndex: "farmer_firstname",
    key: "farmer_firstname",
  },
  {
    title: "Farmer Lname",
    dataIndex: "farmer_lastname",
    key: "farmer_lastname",
  },
  {
    title: "Purpose List name",
    dataIndex: "purposeList_name",
    key: "purposeList_name",
  },
  {
    title: "Sex",
    dataIndex: "sex",
    key: "sex",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
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
