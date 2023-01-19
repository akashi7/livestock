import { Layout, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CreateFeed,
  FeedItems,
  GetAllFeeds,
  getAnimalCatgories,
  SeeOneAnimal,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import '../animal.css'
import { AddFeedModal } from '../modals'
import { AnimalFeedColmns } from './helper'
import Search from '../../common/search'

function ListAnimalFeeds() {
  const dispatch = useDispatch()
  const { allFeeds, feedData, createFeed, animal } = useSelector(
    (state) => state.animal
  )
  const animalCatgories = useSelector((state) => state.animal.categories)
  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(FeedItems())
    dispatch(getAnimalCatgories())
    dispatch(GetAllFeeds({ params: id }))
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
              New Feeding
            </button>
            <div className='w-[60%]  h-[40px]'>
              <Search />
            </div>
            {toogle && (
              <AddFeedModal
                Toogle={setToogle}
                toogle={toogle}
                CreateFeed={CreateFeed}
                createFeed={createFeed}
                dispatch={dispatch}
                feed={feedData}
                categories={animalCatgories}
                id={id}
                getAllFeeds={GetAllFeeds}
              />
            )}
          </div>

          <br />
          <div style={{ margin: '10px' }}>
            <Table
              columns={AnimalFeedColmns}
              dataSource={allFeeds.data}
              loading={allFeeds.loading}
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
export default ListAnimalFeeds
