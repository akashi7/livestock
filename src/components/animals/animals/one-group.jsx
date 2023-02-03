import { Layout } from 'antd'
import GroupMenuBar from '../../common/menubar/g-menubar'
import '../animal.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ViewGroupAnimal } from '../../../state/slices/animal.slice'
import { useParams } from 'react-router-dom'
import GroupAnimalDetails from './groupanimalDet'

export default function ViewOneGroup() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { onegroupAnimal } = useSelector((state) => state.animal)

  console.log({ onegroupAnimal })

  useEffect(() => {
    dispatch(ViewGroupAnimal({ groupId: id }))
    /* eslint-disable-next-line */
  }, [id])
  return (
    <Layout className='layout-container'>
      <div className='main-container'>
        <GroupMenuBar />
        <div className='leftContainer' id='scroll'>
          <GroupAnimalDetails props={onegroupAnimal.data} />
        </div>
      </div>
    </Layout>
  )
}
