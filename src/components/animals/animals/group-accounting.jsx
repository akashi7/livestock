import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  AddToGroup,
  CreateAccountingData,
  GetAccountingData,
  ViewGroupAnimal,
  getAnimalCatgories,
  handleState,
  searchAnimalAction,
} from '../../../state/slices/animal.slice'
import GroupMenuBar from '../../common/menubar/g-menubar'
import '../animal.css'
import { AddAccountModal } from '../modals'
import GroupAnimalDetails from './groupanimalDet'
import { accountColumns } from './helper'

export default function GroupAccount({ farmId }) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { onegroupAnimal, searchedAnimal, accountings, createAcct } =
    useSelector((state) => state.animal)

  const [toogle, setToogle] = useState(false)

  function Toogle() {
    setToogle(!toogle)
  }

  useEffect(() => {
    dispatch(ViewGroupAnimal({ fId: farmId, groupId: id }))
    dispatch(getAnimalCatgories())
    dispatch(
      GetAccountingData({ fId: farmId, param: id, type: 'livestock_group' })
    )

    /* eslint-disable-next-line */
  }, [id])

  return (
    <Layout className='layout-container'>
      <div className='main-container'>
        <GroupMenuBar />
        <div className='leftContainer' id='scroll'>
          <GroupAnimalDetails
            props={onegroupAnimal.data}
            searchAnimalAction={searchAnimalAction}
            searchedAnimal={searchedAnimal}
            AddToGroup={AddToGroup}
            dispatch={dispatch}
            ViewGroupAnimal={ViewGroupAnimal}
            handleState={handleState}
            fId={farmId}
          />
          <br />
          <button
            type='button'
            className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={Toogle}
          >
            New Treatment
          </button>
          {toogle && (
            <AddAccountModal
              toogle={toogle}
              Toogle={setToogle}
              createAccstate={createAcct}
              animalId={id}
              getAllAcc={GetAccountingData}
              dispatch={dispatch}
              createAcc={CreateAccountingData}
              isGroup={true}
              fId={farmId}
            />
          )}
          <div className='mt-[20px] mb-[25px]'>
            <div className=' flex justify-start w-[100%] mb-[10px]'>
              <p className='bg-red text-white p-[5px] '>
                expense : {accountings.data?.result2?.expense_amount}{' '}
              </p>
              <p className='px-[5px] text-white py-[5px] bg-green'>
                income : {accountings.data?.result2?.income_amount}
              </p>
              <p
                className={`px-[5px] py-[5px] text-white ${
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
          <div className='mt-[30px]'>
            <Table
              columns={accountColumns}
              dataSource={accountings.data.data}
              loading={accountings.loading}
              rowKey={(animals) => animals.id}
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
