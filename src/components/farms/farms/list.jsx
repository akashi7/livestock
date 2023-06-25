import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAnimals } from '../../../state/slices/animal.slice'
import { getAllFarms } from '../../../state/slices/farm.slice'
import { getfarmers } from '../../../state/slices/farmer.slice'
import DashCard from '../../common/card'
import Search from '../../common/search'
import { columns } from './helper'

function ListFarms() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { get } = useSelector((state) => state.farm)
  const { get: farmers } = useSelector((state) => state.farmer)
  const { get: animal } = useSelector((state) => state.animal)

  const farmId = localStorage.getItem('fId')

  useEffect(() => {
    dispatch(getAllFarms())
    /* eslint-disable-next-line */
  }, [])

  useEffect(() => {
    dispatch(getfarmers({ fId: farmId }))
    dispatch(getAnimals({ farmId }))
    /* eslint-disable-next-line */
  }, [farmId])

  const Dispatch = (farm) => {
    localStorage.setItem('fId', farm.id)
    localStorage.setItem('fName', farm.name)
    navigate(`/vt/farm/${farm.id}`)
  }
  return (
    <Layout className='h-[100vh] w-full'>
      <div className='flex items-center justify-around'>
        <DashCard title='Total Farmers' number={farmers.data.length} />
        <DashCard title='Total Farms' number={get.data.length} />
        <DashCard title='Total Animals' number={animal.data.length} />
        <DashCard title='Schedules In This Week' number='6' />
      </div>

      <div className='mt-10 flex justify-end '>
        <div className='w-[400px]'>
          <Search />
        </div>
      </div>
      <Table
        columns={columns(Dispatch)}
        dataSource={get.data}
        loading={get.loading}
        pagination={{
          defaultPageSize: 5,
        }}
      />
    </Layout>
  )
}
export default ListFarms
