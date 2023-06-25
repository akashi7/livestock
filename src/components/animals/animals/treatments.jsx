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
import '../animal.css'

export default function TreatmentsList({ farmId }) {
  const dispatch = useDispatch()

  const { treatments, animal, createTreatment } = useSelector(
    (state) => state.animal
  )
  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(TreatmentData({ fId: farmId, param: id, type: 'animal' }))
    dispatch(SeeOneAnimal({ fId: farmId, params: id }))
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
              Add new
            </button>
            <div className='w-[60%]  h-[40px]'>
              <Search />
            </div>
            {toogle && (
              <AddTreatmentModal
                toogle={toogle}
                Toogle={Toogle}
                id={id}
                CreateTreatmentData={CreateTreatmentData}
                TreatmentData={TreatmentData}
                dispatch={dispatch}
                createTreatment={createTreatment}
                fId={farmId}
              />
            )}
          </div>
          <br />
          <div style={{ margin: '10px', width: '100%' }}>
            <Table
              columns={TreatmentsColumn}
              dataSource={treatments.data}
              loading={treatments.loading}
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
