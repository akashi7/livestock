import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'
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
)
export const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstname',
    key: 'firstname',
    render: (text) => text,
  },
  {
    title: 'Last Name',
    dataIndex: 'lastname',
    key: 'lastname',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'NID',
    dataIndex: 'nid',
    key: 'nid',
  },
  {
    title: 'Category',
    dataIndex: 'farmer_cat',
    key: 'farmer_cat',
  },
  {
    title: 'Province',
    dataIndex: 'province',
    key: 'province',
  },
  {
    title: 'District',
    dataIndex: 'district',
    key: 'district',
  },
  {
    title: 'Sector',
    dataIndex: 'sector',
    key: 'sector',
  },
  {
    title: 'Cell',
    dataIndex: 'cell',
    key: 'cell',
  },
  {
    title: 'Village',
    dataIndex: 'village',
    key: 'village',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size='middle'>
        <Dropdown overlay={menu}>
          <p>
            More <DownOutlined />
          </p>
        </Dropdown>
      </Space>
    ),
  },
]

export const data = [
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
  {
    firstname: 'firstname',
    lastname: 'John Brown',
    gender: 32,
    phone: '250787612847',
    nid: '1234565',
    farmer_cat: '1234565',
    province: 'North',
    district: 'Musanze',
    sector: 'Muhoza',
    cell: 'Musanze',
    village: 'Byimana',
  },
]
