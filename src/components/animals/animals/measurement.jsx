import { Layout, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CreateMesurementData,
  GetALLMesurementsData,
  SeeOneAnimal,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import '../animal.css'
import MeasurementModel from '../modals/measurement'
import { AllMeasuresColumn } from './helper'
import Search from '../../common/search'

export default function Measurement() {
  const dispatch = useDispatch()
  const { animal, measures, AllMeasures } = useSelector((state) => state.animal)
  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(SeeOneAnimal({ params: id }))
    dispatch(GetALLMesurementsData({ param: id }))
    /* eslint-disable-next-line */
  }, [])

  console.log({ AllMeasures })

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
              New Measures
            </button>
            <div className='w-[60%]  h-[40px]'>
              <Search />
            </div>
            {toogle && (
              <MeasurementModel
                Toogle={setToogle}
                toogle={toogle}
                dispatch={dispatch}
                id={id}
                create={CreateMesurementData}
                GetALLMesurementsData={GetALLMesurementsData}
                measures={measures}
              />
            )}
          </div>

          <br />
          <div style={{ margin: '10px' }}>
            <Table
              columns={AllMeasuresColumn}
              dataSource={AllMeasures.data}
              loading={AllMeasures.loading}
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
