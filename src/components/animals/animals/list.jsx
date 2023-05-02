import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAnimals, SearchAnimal } from '../../../state/slices/animal.slice'
import Search from '../../common/search'
import '../animal.css'
import { getAnimalColums } from './helper'

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

  const name = ''

  return (
    <Layout className='h-[100%] w-full'>
      <div className=' flex justify-end '>
        <div className='w-[56%]'>
          <Search
            name={name}
            dispatch={dispatch}
            action={SearchAnimal}
            state={get}
            typeName={'name'}
          />
        </div>
      </div>
      <div>
        <Table
          columns={getAnimalColums(Dispatch)}
          dataSource={get.data}
          loading={get.loading}
          rowKey={(animals) => animals.id}
          pagination={{
            defaultPageSize: 5,
          }}
        />
      </div>
    </Layout>
  )
}
export default ListAnimals
