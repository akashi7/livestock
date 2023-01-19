import { Layout } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  GetAllanimalActivities,
  SeeOneAnimal,
} from '../../../state/slices/animal.slice'
import Loader from '../../common/loader'
import MenuBar from '../../common/menubar/menubar'
import '../animal.css'
import AnimalDetails from './animal-details'

export default function OneAnimal() {
  const { animal, activities } = useSelector((state) => state.animal)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SeeOneAnimal({ params: id }))
    dispatch(GetAllanimalActivities({ param: id }))
    //eslint-disable-next-line
  }, [id])

  return (
    <Layout className='layout-container'>
      <div className='main-container'>
        <MenuBar />
        <div className='leftContainer' id='scroll'>
          {animal.loading ? (
            <Loader />
          ) : (
            <AnimalDetails props={animal.data} activities={activities.data} />
          )}
        </div>
      </div>
    </Layout>
  )
}
