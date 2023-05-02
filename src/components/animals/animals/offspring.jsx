import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AnimalOffSpringApi,
  SeeOneAnimal,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import { getAnimalColums } from './helper'

export default function Offspring() {
  const dispatch = useDispatch()

  const { animal, offSpring } = useSelector((state) => state.animal)
  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(SeeOneAnimal({ params: id }))
    dispatch(AnimalOffSpringApi({ id }))
    //eslint-disable-next-line
  }, [])

  return (
    <Layout className='layout-container'>
      <div className='main-container'>
        <MenuBar />
        <div className='leftContainer'>
          <AnimalCard props={animal.data} round={true} />
          <br />
          {/* <div className='m-[10px] flex justify-between items-center'>
            <button
              type='button'
              className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={Toogle}
            >
              Select Ancestors
            </button>
            <div className='w-[60%]  h-[40px]'></div>
            {toogle && (
              <AncestorsModal
                toogle={toogle}
                Toogle={setToogle}
                setChange={setChange}
                setGender={setGender}
              />
            )}
            {change && (
              <NewAnimalModal
                toogle={change}
                Toogle={setChange}
                gender={gender}
                id={id}
              />
            )}
          </div> */}
          <div style={{ margin: '10px' }}>
            <Table
              columns={getAnimalColums(() => null)}
              dataSource={offSpring.data}
              loading={offSpring.loading}
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
