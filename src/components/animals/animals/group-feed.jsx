import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  AddToGroup,
  CreateFeed,
  GetAllFeeds,
  ViewGroupAnimal,
  getAnimalCatgories,
  handleState,
  searchAnimalAction,
} from '../../../state/slices/animal.slice'
import GroupMenuBar from '../../common/menubar/g-menubar'
import '../animal.css'
import { AddFeedModal } from '../modals'
import GroupAnimalDetails from './groupanimalDet'
import { AnimalFeedColmns } from './helper'

export default function GroupFeeding() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const {
    onegroupAnimal,
    searchedAnimal,
    allFeeds,
    createFeed,
    animalCatgories,
  } = useSelector((state) => state.animal)

  const [toogle, setToogle] = useState(false)

  function Toogle() {
    setToogle(!toogle)
  }

  console.log({ allFeeds })

  useEffect(() => {
    dispatch(ViewGroupAnimal({ groupId: id }))
    dispatch(GetAllFeeds({ params: id, type: 'livestock_group' }))
    dispatch(getAnimalCatgories())
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
            New Feeding
          </button>
          {toogle && (
            <AddFeedModal
              Toogle={setToogle}
              toogle={toogle}
              CreateFeed={CreateFeed}
              createFeed={createFeed}
              dispatch={dispatch}
              categories={animalCatgories}
              id={id}
              getAllFeeds={GetAllFeeds}
              isGroup={true}
            />
          )}
          <div className='mt-[30px]'>
            <Table
              columns={AnimalFeedColmns}
              dataSource={allFeeds.data}
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
