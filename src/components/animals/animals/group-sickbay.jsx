import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  AddToGroup,
  GetAllFeeds,
  ViewGroupAnimal,
  createSickBy,
  getAllAnimalsSickbay,
  getAnimalCatgories,
  handleState,
  searchAnimalAction,
} from '../../../state/slices/animal.slice'
import GroupMenuBar from '../../common/menubar/g-menubar'
import '../animal.css'
import { AddSeekBayModal } from '../modals'
import GroupAnimalDetails from './groupanimalDet'
import { AnimalsSickbaycolumns } from './helper'

export default function GroupSickBay() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { onegroupAnimal, searchedAnimal, animalsSickBayData } = useSelector(
    (state) => state.animal
  )

  const { loading } = useSelector((state) => state.animal.createSickBy)
  const animalCatgories = useSelector((state) => state.animal.categories)
  const [toogle, setToogle] = useState(false)

  function Toogle() {
    setToogle(!toogle)
  }

  useEffect(() => {
    dispatch(ViewGroupAnimal({ groupId: id }))
    dispatch(GetAllFeeds({ params: id, type: 'livestock_group' }))
    dispatch(getAnimalCatgories())
    dispatch(getAllAnimalsSickbay({ param: id, type: 'livestock_group' }))
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
            New data
          </button>
          {toogle && (
            <AddSeekBayModal
              Toogle={Toogle}
              toogle={toogle}
              categories={animalCatgories}
              dispatch={dispatch}
              createSickBy={createSickBy}
              loading={loading}
              id={id}
              getAllAnimalsSickbay={getAllAnimalsSickbay}
              isGroup={true}
            />
          )}
          <div className='mt-[30px]'>
            <Table
              columns={AnimalsSickbaycolumns}
              dataSource={animalsSickBayData.data}
              loading={onegroupAnimal.loading}
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
