import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import SearchReport from '../../common/reportsearch'
import { useDispatch, useSelector } from 'react-redux'
import { UpcomingT } from '../../../state/slices/animal.slice'
import { TreatmentReportColumn } from './helper'
import '../index.css'

export default function UpcomingTreatmentsReports() {
  const dispatch = useDispatch()

  const { upcomingt } = useSelector((state) => state.animal)
  useEffect(() => {
    dispatch(UpcomingT())
    /* eslint-disable-next-line */
  }, [])

  return (
    <Layout className='h-[100%] w-[100%]'>
      {/* <div className='flex h-[350px] justify-between items-center m-[15px] p-[10px] border-[1.1px] border-blue'>
        <div className='w-[50%]'>
          <LineChart />
        </div>
        <div className='w-[100%] flex justify-center'>
          <div className=' w-[330px]  '>
            <PieChart />
          </div>
        </div>
      </div> */}
      <div className='mt-[10px] mb-[10px] '>
        <SearchReport disabled={true} />
      </div>
      <div>
        <Table
          columns={TreatmentReportColumn}
          dataSource={upcomingt.data.data_result}
          loading={upcomingt.loading}
          rowKey={(rep) => rep.id}
          pagination={{
            defaultPageSize: 5,
          }}
        />
      </div>
    </Layout>
  )
}
