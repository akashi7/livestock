import { Layout } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FarmCashflow, ViewOnefarm } from '../../../state/slices/farm.slice'
import AnimalCard from '../../common/Cards'
import FarmMenuBar from '../../common/menubar/farmMenu'
import SearchReport from '../../common/reportsearch'

export default function CashFlow() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { oneFarm, cashflow } = useSelector((state) => state.farm)

  useEffect(() => {
    dispatch(ViewOnefarm({ param: id }))
    dispatch(FarmCashflow({ param: id }))
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
            title={'cash flow'}
          />
          <div className='mt-[40px]'>
            <SearchReport />
          </div>
          <div className='mt-[50px]'>
            <div className='flex justify-end  border-b-[1.1px] border-borders-c p-[5px]'>
              <div className='tyop'>
                <p style={{ width: '150px', fontWeight: 'bold' }}>
                  Beginning Balance :{' '}
                </p>
                <p>$0.00</p>
              </div>
            </div>
            <div className='flex flex-col border-b-[1.1px] border-borders-c'>
              <div className='w-full'>
                <p className='font-bold'>Cash from Operating Activities</p>
                <br />
                <div>
                  {cashflow.data?.dataIncome?.map((income, idx) => {
                    return (
                      <div key={idx} className='data-cash'>
                        <p>{income.category}</p>
                        <p>{income.amount}</p>
                      </div>
                    )
                  })}{' '}
                </div>
              </div>
              <div className='flex justify-end  p-[5px] '>
                <div className='tyop'>
                  <p style={{ width: '150px', fontWeight: 'bold' }}>
                    Total Cash Inflow :
                  </p>
                  <p>{cashflow.data?.cashflow?.income_amount}</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col border-b-[1.1px] border-borders-c'>
              <div className='w-full'>
                <p className='font-bold'>Cash Expenditures</p>
                <br />
                <div>
                  {cashflow.data?.dataExpense?.map((expense, idx) => {
                    return (
                      <div key={idx} className='data-cash'>
                        <p>{expense.category}</p>
                        <p>{expense.amount}</p>
                      </div>
                    )
                  })}{' '}
                </div>
              </div>
              <div className='flex justify-end p-[5px] '>
                <div className='tyop'>
                  <p style={{ width: '150px', fontWeight: 'bold' }}>
                    Total Expenditures :
                  </p>
                  <p>{cashflow.data?.cashflow?.expense_amount}</p>
                </div>
              </div>
            </div>
            <div className='flex justify-end  border-b-[1.1px] border-borders-c p-[5px]'>
              <div className='tyop'>
                <p style={{ width: '150px', fontWeight: 'bold' }}>
                  Net Change in Cash :{' '}
                </p>
                <p>{cashflow.data?.cashflow?.profit_amount}</p>
              </div>
            </div>
            <div className='flex justify-end  border-b-[1.1px] border-borders-c p-[5px]'>
              <div className='tyop'>
                <p style={{ width: '150px', fontWeight: 'bold' }}>
                  Ending balance :{' '}
                </p>
                <p>{cashflow.data?.cashflow?.profit_amount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
