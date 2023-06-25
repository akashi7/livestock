import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ContactsApi,
  CreateAccountingData,
  GetAccountingData,
  SeeOneAnimal,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import Search from '../../common/search'
import { AddAccountModal } from '../modals'
import { accountColumns } from './helper'

export default function ListAccounts({ farmId }) {
  const dispatch = useDispatch()

  const { animal, accountings, createAcct, contacts } = useSelector(
    (state) => state.animal
  )
  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(GetAccountingData({ fId: farmId, param: id, type: 'animal' }))
    dispatch(SeeOneAnimal({ fId: farmId, params: id }))
    dispatch(ContactsApi())
    //eslint-disable-next-line
  }, [])

  const [toogle, setToogle] = useState(false)

  function Toogle() {
    setToogle(!toogle)
  }

  return (
    <Layout className='layout-container'>
      <div className='main-container'>
        <MenuBar />
        <div className='leftContainer'>
          <AnimalCard props={animal.data} round={true} />
          <br />
          <div className='m-[10px] flex justify-between items-center'>
            <button
              type='button'
              className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={Toogle}
            >
              Add New
            </button>
            <div className='w-[60%]  h-[40px]'>
              <Search />
            </div>
            {toogle && (
              <AddAccountModal
                toogle={toogle}
                Toogle={setToogle}
                createAccstate={createAcct}
                animalId={id}
                getAllAcc={GetAccountingData}
                dispatch={dispatch}
                createAcc={CreateAccountingData}
                contact={contacts}
                fId={farmId}
              />
            )}
          </div>
          <div className='mt-[20px] mb-[25px]'>
            <div className=' flex justify-start w-[100%] m-[10px]'>
              <p className='m-[5px] bg-red text-white p-[5px] '>
                expense : {accountings.data?.result2?.expense_amount}{' '}
              </p>
              <p className='m-[5px] text-white p-[5px] bg-green'>
                income : {accountings.data?.result2?.income_amount}
              </p>
              <p
                className={`m-[5px] p-[5px] text-white ${
                  accountings.data?.result2?.income_amount >
                  accountings.data?.result2?.expense_amount
                    ? 'bg-green'
                    : 'bg-red'
                } `}
              >
                profit : {accountings.data?.result2?.profit_amount}
              </p>
            </div>
          </div>
          <div style={{ margin: '10px' }}>
            <Table
              columns={accountColumns}
              dataSource={accountings.data.data}
              loading={accountings.loading}
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
