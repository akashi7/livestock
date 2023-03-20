import { Layout } from 'antd'
import '../../animals/animal.css'
import FarmMenuBar from '../../common/menubar/farmMenu'
import FarmDetails from './details'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ViewOnefarm } from '../../../state/slices/farm.slice'

export default function ViewOneFarm() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { oneFarm } = useSelector((state) => state.farm)

  useEffect(() => {
    dispatch(ViewOnefarm({ param: id }))
    //eslint-disable-next-line
  }, [id])

  return (
    <Layout className='layout-container'>
      <div className='main-container'>
        <FarmMenuBar />
        <div className='leftContainer' id='scroll'>
          <FarmDetails props={oneFarm.data} />
        </div>
      </div>
    </Layout>
  )
}
