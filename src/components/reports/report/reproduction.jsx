import { Layout, Table } from 'antd'
import LineChart from '../../common/charts/lineChart'
import PieChart from '../../common/charts/pieChart'
import SearchReport from '../../common/reportsearch'
import { TreatmentReportColumn } from './helper'
export default function ReproductionReport() {
  return (
    <Layout className='h-[100%] w-[100%]'>
      <div className='flex h-[330px] justify-between items-center m-[15px] p-[10px] border-[1.1px] border-blue'>
        <div className='w-[50%]'>
          <LineChart />
        </div>
        <div className='w-[100%] flex justify-center'>
          <div className=' w-[30%]  '>
            <PieChart />
          </div>
        </div>
      </div>
      <div className='mt-[10px] mb-[10px] '>
        <SearchReport />
      </div>
      <div>
        <Table
          columns={TreatmentReportColumn}
          dataSource={[]}
          loading={false}
          // rowKey={(animals) => animals.id}
        />
      </div>
    </Layout>
  )
}
