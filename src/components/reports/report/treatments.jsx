import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ViewTreatmentReport,
  ViewTypesReport,
} from '../../../state/slices/animal.slice'
import LineChart from '../../common/charts/lineChart'
import PieChart from '../../common/charts/pieChart'
import SearchReport from '../../common/reportsearch'
import { TreatmentReportColumn } from './helper'
import PieChartComponent from '../../common/piechart'

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
              <PieChartComponent />
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
        />
      </div>
    </Layout>
  )
}
