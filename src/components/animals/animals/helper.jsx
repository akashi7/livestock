import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'
import moment from 'moment'
import { FaEye, FaTrash } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'
import { IoIosAddCircle } from 'react-icons/io'

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

export function getAnimalColums(dispatch) {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, row) => (
        <div>
          {row.is_group === true ? (
            <div className='flex flex-row'>
              <p className='isG'>G</p>
              <p className='pl-[7px]'> {text} </p>
            </div>
          ) : (
            <p>{text} </p>
          )}
        </div>
      ),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Breed',
      dataIndex: 'breed',
      key: 'breed',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
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
}

export const AnimalsGroupcolumns = (Dispatch) => [
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Group qty',
    dataIndex: 'group_qty',
    key: 'group_qty',
  },
  {
    title: 'Name"',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <div className=''>
        <FaEye
          size={22}
          color={'#31b0d5'}
          onClick={() => Dispatch(record)}
          className='cursor-pointer'
        />
      </div>
    ),
  },
]
export const AnimalsSickbaycolumns = [
  {
    title: 'Date',
    dataIndex: 'onsetDate',
    key: 'onsetDate',
    render: (text) => moment(text).format('MM/DD/YYYY'),
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
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Intervention',
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
]

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
]

// "onsetDate":"2022-05-05",
//    "animalId":1,
//    "animalCategoryId":2,
//    "groupAnimalId":1,
//    "quantity":12,
//    "feedId":1

export const AnimalFeedColmns = [
  {
    title: 'Date',
    dataIndex: 'onsetDate',
    key: 'onsetDate',
    render: (text) => moment(text).format('MM/DD/YYYY'),
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
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
]

export const AnimalVaccinationColmns = [
  {
    title: 'Date',
    dataIndex: 'onsetDate',
    key: 'onsetDate',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'Next appointment',
    dataIndex: 'nextAppointment',
    key: 'nextAppointment',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'created',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'vaccination',
    dataIndex: 'vaccinationId',
    key: 'vaccinationId',
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
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'By',
    dataIndex: 'createdBy',
    key: 'createdBy',
  },
]

export const AnimalReportcolumnsReports = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Age In Days',
    dataIndex: 'ageInDays',
    key: 'ageInDays',
  },
  {
    title: 'Animal Category',
    dataIndex: 'animalCategory',
    key: 'animalCategory',
  },
  {
    title: 'Earring num',
    dataIndex: 'earring_num',
    key: 'earring_num',
  },
  {
    title: 'Farm name',
    dataIndex: 'farm_name',
    key: 'farm_name',
  },
  {
    title: 'Farmer Fname',
    dataIndex: 'farmer_firstname',
    key: 'farmer_firstname',
  },
  {
    title: 'Farmer Lname',
    dataIndex: 'farmer_lastname',
    key: 'farmer_lastname',
  },
  {
    title: 'Purpose List name',
    dataIndex: 'purposeList_name',
    key: 'purposeList_name',
  },
  {
    title: 'Sex',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
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

export const TreatmentsColumn = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Batch',
    dataIndex: 'batch',
    key: 'batch',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Site',
    dataIndex: 'site',
    key: 'site',
  },
  {
    title: 'Withdrawal date',
    dataIndex: 'withdrawal_date',
    key: 'withdrawal_date',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'Retreat date',
    dataIndex: 'retreat_date',
    key: 'retreat_date',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'technician',
    dataIndex: 'technician',
    key: 'technician',
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
]

export const accountColumns = [
  {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'category',
    dataIndex: 'category',
    key: 'category',
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

//hazawi singer "type": "expense",

export const AllMeasuresColumn = [
  {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'height',
    dataIndex: 'height',
    key: 'height',
  },
  {
    title: 'weight',
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: 'condition_score',
    dataIndex: 'condition_score',
    key: 'condition_score',
  },
  {
    title: 'fec',
    dataIndex: 'fec',
    key: 'fec',
  },
]

export const NotesColumn = (Dispatch) => [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Keywords',
    dataIndex: 'keywords',
    key: 'keywords',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <div className='icons'>
        <FaEye
          size={22}
          color={'#31b0d5'}
          onClick={() => Dispatch(record)}
          className='cursor-pointer'
        />
        <FiEdit2 size={22} color={'#31b0d5'} className='cursor-pointer' />
        <FaTrash size={19} color={'#C70000'} className='cursor-pointer' />
      </div>
    ),
  },
]

export const YieldsColumn = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'quantity',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Batch number',
    dataIndex: 'batch_number',
    key: 'batch_number',
  },
  {
    title: 'Trace number',
    dataIndex: 'trace_number',
    key: 'trace_number',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade',
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
  },
]

export const BreedsColumn = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'animal status',
    dataIndex: 'update_animal_status',
    key: 'update_animal_status',
  },
  {
    title: 'breeding method',
    dataIndex: 'breeding_method',
    key: 'breeding_method',
  },
  {
    title: 'Technicial',
    dataIndex: 'technicial',
    key: 'technicial',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
  },
]

export const SearchedAnimal = (dispatch) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <div className='text-center'>
        <IoIosAddCircle
          size={22}
          color={'#31b0d5'}
          onClick={() => dispatch(record)}
          className='cursor-pointer'
        />
      </div>
    ),
  },
]
