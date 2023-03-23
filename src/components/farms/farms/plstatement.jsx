import { Layout } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ViewOnefarm, FarmPL } from '../../../state/slices/farm.slice'
import AnimalCard from '../../common/Cards'
import FarmMenuBar from '../../common/menubar/farmMenu'
import SearchReport from '../../common/reportsearch'

export default function PLStatement() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { oneFarm, pl } = useSelector((state) => state.farm)

  useEffect(() => {
    dispatch(ViewOnefarm({ param: id }))
    dispatch(FarmPL({ param: id }))
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
            title={'PL statement'}
          />
          <div className='mt-[40px]'>
            <SearchReport disabled={true} />
          </div>
          <div className='mt-[50px] border-[1.1px] border-borders-c '>
            <div className='border-b-[1.1px] border-borders-c p-[7px]'>
              <p style={{ fontWeight: 'bold' }}>Income</p>
            </div>
            <div className='border-b-[1.1px] border-borders-c p-[7px]'>
              <p style={{ fontWeight: 'bold' }}>Total income</p>
            </div>

            <div className='flex flex-row items-center border-b-[1.1px] border-borders-c p-[5px]'>
              <div className='w-[80%]'>
                <div>
                  {pl.data?.dataIncome?.map((expense, idx) => {
                    return (
                      <div key={idx} className='data-pl'>
                        <p>{expense.category}</p>
                      </div>
                    )
                  })}{' '}
                </div>
              </div>
              <div className='flex justify-end items-center  border-l-[1.1px] border-borders-c p-[7px]'>
                <p>{pl.data?.pl?.income_amount}</p>
              </div>
            </div>

            <div className='border-b-[1.1px] border-borders-c p-[7px]'>
              <p style={{ fontWeight: 'bold' }}>Expenses</p>
            </div>
            <div className='flex flex-row items-center border-b-[1.1px] border-borders-c p-[5px]'>
              <div className='w-[80%]'>
                <div>
                  {pl.data?.dataExpense?.map((expense, idx) => {
                    return (
                      <div key={idx} className='data-pl'>
                        <p>{expense.category}</p>
                      </div>
                    )
                  })}{' '}
                </div>
              </div>
              <div className='flex justify-end items-center  border-l-[1.1px] border-borders-c p-[7px]'>
                <p>{pl.data?.pl?.expense_amount}</p>
              </div>
            </div>
            <div className='flex flex-row items-center border-b-[1.1px] border-borders-c p-[5px]'>
              <div className='w-[80%]'>
                <p style={{ fontWeight: 'bold' }}>Total Expenses</p>
              </div>
              <div className='flex justify-end items-center  border-l-[1.1px] border-borders-c p-[7px]'>
                <p>{pl.data?.pl?.expense_amount}</p>
              </div>
            </div>
            <div className='flex flex-row items-center border-b-[1.1px] border-borders-c p-[5px]'>
              <div className='w-[80%]'>
                <p style={{ fontWeight: 'bold' }}>Net profit</p>
              </div>
              <div className='flex justify-end items-center  border-l-[1.1px] border-borders-c p-[7px]'>
                <p>{pl.data?.pl?.income_amount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
