import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimals } from '../../../state/slices/animal.slice'
import { getAllFarms } from '../../../state/slices/farm.slice'
import { getfarmers } from '../../../state/slices/farmer.slice'
import DashCard from '../../common/card'
import Search from '../../common/search'
import { columns } from './helper'

function ListFarmers({ farmId }) {
  const { get } = useSelector((state) => state.farmer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getfarmers({ fId: farmId }))
    /* eslint-disable-next-line */
  }, [])

  console.log({ get }, { farmId })

  return (
    <Layout className='h-[100%] w-full '>
      <div className='mt-10 flex justify-end '>
        <div className='w-[400px]'>
          <Search />
        </div>
      </div>
      <h2 className=' mb-3 text-blue text-lg'>Farmers</h2>
      <div>
        <Table
          columns={columns}
          dataSource={get.data}
          loading={false}
          pagination={{
            defaultPageSize: 5,
          }}
        />
      </div>
    </Layout>
  )
}
export default ListFarmers
