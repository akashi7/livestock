import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllFarms } from '../../../state/slices/farm.slice'
import Search from '../../common/search'
import { columns } from './helper'

function ListFarms() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { get } = useSelector((state) => state.farm)
  useEffect(() => {
    dispatch(getAllFarms())
    /* eslint-disable-next-line */
  }, [])

  const Dispatch = (farm) => {
    localStorage.setItem('fId', farm.id)
    navigate(`/vt/farm/${farm.id}`)
  }
  return (
    <Layout className='h-[100vh] w-full'>
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
