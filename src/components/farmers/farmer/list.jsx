import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimals } from '../../../state/slices/animal.slice'
import { getAllFarms } from '../../../state/slices/farm.slice'
import { getfarmers } from '../../../state/slices/farmer.slice'
import DashCard from '../../common/card'
import Search from '../../common/search'
import { columns } from './helper'

function ListFarmers() {
  const { get } = useSelector((state) => state.farmer)
  const { get: farm } = useSelector((state) => state.farm)
  const { get: animal } = useSelector((state) => state.animal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getfarmers())
    dispatch(getAllFarms())
    dispatch(getAnimals())
    /* eslint-disable-next-line */
  }, [])
  return (
    <Layout className='h-[100%] w-full '>
      <div className='flex items-center justify-around'>
        <DashCard title='Total Farmers' number={get.data.length} />
        <DashCard title='Total Farms' number={farm.data.length} />
        <DashCard title='Total Animals' number={animal.data.length} />
        <DashCard title='Schedules In This Week' number='6' />
      </div>
      <div className='mt-10 flex justify-end '>
        <div className='w-[400px]'>
          <Search />
        </div>
      </div>
      <h2 className=' mb-3 text-blue text-lg'>Farmers</h2>
      <div>
        <Table columns={columns} dataSource={get.data} loading={false} />
      </div>
    </Layout>
  )
}
export default ListFarmers
