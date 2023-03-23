import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'
import moment from 'moment'
import { FaEye, FaTrash } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'
import { IoIosAddCircle } from 'react-icons/io'

export const columns = (dispatch) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Province',
    dataIndex: 'province',
    key: 'province',
  },
  {
    title: 'district',
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
      <div className='icons'>
        <FaEye
          size={22}
          color={'#31b0d5'}
          onClick={() => dispatch(record)}
          className='cursor-pointer'
        />
        <FiEdit2 size={22} color={'#31b0d5'} className='cursor-pointer' />
        <FaTrash size={19} color={'#C70000'} className='cursor-pointer' />
      </div>
    ),
  },
]

export const columnsReports = [
  {
    title: 'District',
    dataIndex: 'district',
    key: 'district',
  },
  {
    title: 'Farmers',
    dataIndex: 'farmers',
    key: 'farmers',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'gender female',
    dataIndex: 'gender_female',
    key: 'gender_female',
  },
  {
    title: 'gender male',
    dataIndex: 'gender_male',
    key: 'gender_male',
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
]

export const Farmcolumn = [
  {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'type',
    dataIndex: 'type',
    key: 'type',
    render: (text, row) => (
      <div>
        {row.type === 'expense' ? (
          <p
            style={{
              color: 'white',
              backgroundColor: 'red',
              padding: '5px',
              width: 'fit-content',
            }}
          >
            {text}
          </p>
        ) : (
          <p
            style={{
              color: 'white',
              backgroundColor: 'green',
              padding: '5px',
              width: 'fit-content',
            }}
          >
            {text}{' '}
          </p>
        )}
      </div>
    ),
  },
  {
    title: 'vendor',
    dataIndex: 'vendor',
    key: 'vendor',
  },
  {
    title: 'amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (text, row) => (
      <div>
        {row.type === 'expense' ? (
          <p style={{ color: 'red' }}>{text}</p>
        ) : (
          <p style={{ color: 'green' }}>{text} </p>
        )}
      </div>
    ),
  },
]
