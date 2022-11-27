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
    title: "District",
    dataIndex: "district",
    key: "district",
  },
  {
    title: "Farmers",
    dataIndex: "farmers",
    key: "farmers",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "gender female",
    dataIndex: "gender_female",
    key: "gender_female",
  },
  {
    title: "gender male",
    dataIndex: "gender_male",
    key: "gender_male",
  },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <Dropdown overlay={menu}>
  //         <p>
  //           More <DownOutlined />
  //         </p>
  //       </Dropdown>
  //     </Space>
  //   ),
  // },
];
