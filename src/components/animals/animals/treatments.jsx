import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CreateTreatmentData,
  SeeOneAnimal,
  TreatmentData,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import Search from '../../common/search'
import AddTreatmentModal from '../modals/addTreatment'
import { TreatmentsColumn } from './helper'

export default function TreatmentsList() {
  const dispatch = useDispatch()

  const { treatments, animal, createTreatment } = useSelector(
    (state) => state.animal
  )
  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(TreatmentData({ param: id }))
    dispatch(SeeOneAnimal({ params: id }))
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
          <div style={{ margin: '10px' }}>
            <button
              type='button'
              className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={Toogle}
            >
              Add new
            </button>
            {toogle && (
              <AddTreatmentModal
                toogle={toogle}
                Toogle={Toogle}
                id={id}
                CreateTreatmentData={CreateTreatmentData}
                TreatmentData={TreatmentData}
                dispatch={dispatch}
                createTreatment={createTreatment}
              />
            )}
          </div>
          <div>
            <Search />
          </div>
          <br />
          <div style={{ margin: '10px' }}>
            <Table
              columns={TreatmentsColumn}
              dataSource={treatments.data}
              loading={treatments.loading}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
