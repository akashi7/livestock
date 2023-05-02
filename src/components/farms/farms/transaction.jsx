import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  ViewOnefarm,
  GetFarmTransactionReport,
} from '../../../state/slices/farm.slice'
import AnimalCard from '../../common/Cards'
import LineChart from '../../common/charts/lineChart'
// import PieChart from '../../common/charts/pieChart'
import FarmMenuBar from '../../common/menubar/farmMenu'
import { Farmcolumn } from './helper'

export default function FarmTransaction() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { oneFarm, transaction } = useSelector((state) => state.farm)

  useEffect(() => {
    dispatch(ViewOnefarm({ param: id }))
    dispatch(GetFarmTransactionReport({ param: id }))
    //eslint-disable-next-line
  }, [id])

  return (
    <Layout className='layout-container'>
      <div className='main-container'>
        <FarmMenuBar />
        <div className='leftContainer'>
          <AnimalCard
            props={oneFarm.data}
            round={true}
            type={true}
            title={'Transaction'}
          />
          <div className='flex h-[350px] mt-[30px] justify-between items-center m-[15px] p-[10px] border-[1.1px] border-blue'>
            <div className='w-[50%]'>
              <LineChart transaction={transaction.data?.review} />
            </div>
            {/* <div className='w-[100%] flex justify-center'>
              <div className=' w-[330px]  '>
                <PieChart />
              </div>
            </div> */}
          </div>
          <div className='mt-[20px] mb-[25px]'>
            <div className=' flex justify-start w-[100%] m-[10px]'>
              <p className='m-[5px] bg-red text-white p-[5px] '>
                expense : {transaction.data?.review?.expense_amount}{' '}
              </p>
              <p className='m-[5px] text-white p-[5px] bg-green'>
                income : {transaction.data?.review?.income_amount}
              </p>
              <p
                className={`m-[5px] p-[5px] text-white ${
                  transaction.data?.review?.income_amount >
                  transaction.data?.review?.expense_amount
                    ? 'bg-green'
                    : 'bg-red'
                } `}
              >
                {transaction.data?.review?.income_amount >
                transaction.data?.review?.expense_amount
                  ? 'profit'
                  : 'loss'}{' '}
                : {transaction.data?.review?.profit_amount}
              </p>
            </div>
          </div>
          <div>
            <Table
              columns={Farmcolumn}
              dataSource={transaction.data.data}
              loading={transaction.loading}
              rowKey={(rep) => rep.id}
              pagination={{
                defaultPageSize: 5,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
