import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ViewTreatmentReport,
  ViewTypesReport,
} from '../../../state/slices/animal.slice'
import PieChartComponent from '../../common/piechart'
import SearchReport from '../../common/reportsearch'
import { TreatmentReportColumn } from './helper'

export default function TreatmentReport() {
  const dispatch = useDispatch()

  const { treatReports, typesReport } = useSelector((state) => state.animal)
  useEffect(() => {
    dispatch(ViewTreatmentReport())
    dispatch(ViewTypesReport())
    /* eslint-disable-next-line */
  }, [])

  return (
    <Layout className='h-[100%] w-[100%]'>
      <div className='flex justify-center '>
        <div className='h-fit w-fit m-[15px] p-[10px] border-[1.1px] border-blue'>
          <div className='w-[100%] flex justify-center items-center'>
            <div className=' w-fit text-center '>
              <PieChartComponent typesReport={typesReport} />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[10px] mb-[10px] '>
        <SearchReport />
      </div>
      <div>
        <Table
          columns={TreatmentReportColumn}
          dataSource={treatReports.data.data_result}
          loading={treatReports.loading}
          rowKey={(rep) => rep.id}
          pagination={{
            defaultPageSize: 5,
          }}
        />
      </div>
    </Layout>
  )
}
