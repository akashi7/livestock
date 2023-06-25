import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimalReport } from '../../../state/slices/animal.slice'
import { AnimalReportcolumnsReports } from './helper'

function ListAnimalReports({ farmId }) {
  const dispatch = useDispatch()
  const { animalReportsData } = useSelector((state) => state.animal)
  useEffect(() => {
    dispatch(AnimalReport({ fId: farmId }))
    /* eslint-disable-next-line */
  }, [])

  return (
    <Layout className='h-[100vh] w-full'>
      <Table
        columns={AnimalReportcolumnsReports}
        dataSource={animalReportsData.data}
        loading={animalReportsData.loading}
        pagination={{
          defaultPageSize: 5,
        }}
      />
    </Layout>
  )
}
export default ListAnimalReports
