import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  AddToGroup,
  ViewGroupAnimal,
  searchAnimalAction,
  handleState,
} from '../../../state/slices/animal.slice'
import GroupMenuBar from '../../common/menubar/g-menubar'
import '../animal.css'
import GroupAnimalDetails from './groupanimalDet'
import { AnimalViewGroup } from './helper'

export default function ViewOneGroup() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { onegroupAnimal, searchedAnimal } = useSelector(
    (state) => state.animal
  )

  useEffect(() => {
    dispatch(ViewGroupAnimal({ groupId: id }))
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
          <div className='mt-[30px]'>
            <Table
              columns={AnimalViewGroup}
              dataSource={onegroupAnimal.data.records}
              loading={onegroupAnimal.loading}
              rowKey={(animals) => animals.id}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
