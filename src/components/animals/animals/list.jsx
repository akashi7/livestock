import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAnimals } from '../../../state/slices/animal.slice'
import { getAnimalColums } from './helper'
import '../animal.css'
import Search from '../../common/search'

function ListAnimals() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { get } = useSelector((state) => state.animal)
  useEffect(() => {
    dispatch(getAnimals())
    /* eslint-disable-next-line */
  }, [])

  function Dispatch(animals) {
    localStorage.setItem('id', animals.id)
    navigate(`/vt/animal/${animals.id}`)
  }

  return (
    <Layout className='h-[100%] w-full'>
      <div>
        <Search />
      </div>
      <div>
        <Table
          columns={getAnimalColums(Dispatch)}
          dataSource={get.data}
          loading={get.loading}
          rowKey={(animals) => animals.id}
        />
      </div>
    </Layout>
  )
}
export default ListAnimals
