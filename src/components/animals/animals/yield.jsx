import { Layout, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  SeeOneAnimal,
  retrieveAllanimalYields,
  CreateAnimalYield,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import '../animal.css'
import { AddYieldModal } from '../modals'
import { YieldsColumn } from './helper'
import Search from '../../common/search'

function ListAnimalYields() {
  const dispatch = useDispatch()
  const { createYield, animal, listYields } = useSelector(
    (state) => state.animal
  )
  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(retrieveAllanimalYields({ param: id }))
    dispatch(SeeOneAnimal({ params: id }))
    /* eslint-disable-next-line */
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
              New Yield
            </button>
            <div className='w-[60%]  h-[40px]'>
              <Search />
            </div>
            {toogle && (
              <AddYieldModal
                Toogle={setToogle}
                toogle={toogle}
                CreateYield={CreateAnimalYield}
                createYield={createYield}
                dispatch={dispatch}
                id={id}
                yields={retrieveAllanimalYields}
              />
            )}
          </div>

          <br />
          <div style={{ margin: '10px' }}>
            <Table
              columns={YieldsColumn}
              dataSource={listYields.data}
              loading={listYields.loading}
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
export default ListAnimalYields
