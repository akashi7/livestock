import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  GetAccountingData,
  SeeOneAnimal,
  CreateAccountingData,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import { accountColumns } from './helper'
import Search from '../../common/search'
import { AddAccountModal } from '../modals'

export default function ListAccounts() {
  const dispatch = useDispatch()

  const { animal, accountings, createAcct } = useSelector(
    (state) => state.animal
  )
  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(GetAccountingData({ param: id }))
    dispatch(SeeOneAnimal({ params: id }))
    //eslint-disable-next-line
  }, [])

  const [toogle, setToogle] = useState(false)

  function Toogle() {
    setToogle(!toogle)
  }

  console.log({ accountings })

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
              />
            )}
          </div>
          <div style={{ margin: '10px' }}>
            <Table
              columns={accountColumns}
              dataSource={accountings.data}
              loading={accountings.loading}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
