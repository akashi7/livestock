import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  AddToGroup,
  CreateTreatmentData,
  TreatmentData,
  ViewGroupAnimal,
  getAnimalCatgories,
  handleState,
  searchAnimalAction,
} from '../../../state/slices/animal.slice'
import GroupMenuBar from '../../common/menubar/g-menubar'
import '../animal.css'
import AddTreatmentModal from '../modals/addTreatment'
import GroupAnimalDetails from './groupanimalDet'
import { TreatmentsColumn } from './helper'

export default function GroupTreatment() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { onegroupAnimal, searchedAnimal, treatments, createTreatment } =
    useSelector((state) => state.animal)

  const [toogle, setToogle] = useState(false)

  function Toogle() {
    setToogle(!toogle)
  }

  useEffect(() => {
    dispatch(ViewGroupAnimal({ groupId: id }))
    dispatch(getAnimalCatgories())
    dispatch(TreatmentData({ param: id, type: 'livestock_group' }))
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
            <AddTreatmentModal
              toogle={toogle}
              Toogle={Toogle}
              id={id}
              CreateTreatmentData={CreateTreatmentData}
              TreatmentData={TreatmentData}
              dispatch={dispatch}
              createTreatment={createTreatment}
              isGroup={true}
            />
          )}
          <div className='mt-[30px]'>
            <Table
              columns={TreatmentsColumn}
              dataSource={treatments.data}
              loading={treatments.loading}
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
