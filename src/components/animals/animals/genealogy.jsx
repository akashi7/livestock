import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  SeeOneAnimal,
  GetAllMalesAnimalsApi,
  GetAllFemalesAnimalsApi,
  AllAncestors,
  addAncestorsApi,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import AncestorsModal from '../modals/addancestors'
import NewAnimalModal from '../modals/renderAnimal'
import { getAnimalColums } from './helper'

export default function Genealogy() {
  const dispatch = useDispatch()

  const { animal, allMales, allFemales, ancestors } = useSelector(
    (state) => state.animal
  )
  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(SeeOneAnimal({ params: id }))
    dispatch(GetAllFemalesAnimalsApi())
    dispatch(GetAllMalesAnimalsApi())
    dispatch(AllAncestors({ id }))
    //eslint-disable-next-line
  }, [])

  const [toogle, setToogle] = useState(false)
  const [change, setChange] = useState(false)
  const [gender, setGender] = useState('')

  function Toogle() {
    setToogle(!toogle)
  }

  console.log('s', animal && animal.data)

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
              Select Ancestors
            </button>
            <div className='w-[60%]  h-[40px]'></div>
            {toogle && (
              <AncestorsModal
                toogle={toogle}
                Toogle={setToogle}
                setChange={setChange}
                setGender={setGender}
                allMales={allMales?.data}
                allFemales={allFemales?.data}
                addAncestorsApi={addAncestorsApi}
                dispatch={dispatch}
                animals={animal && animal.data}
              />
            )}
            {change && (
              <NewAnimalModal
                toogle={change}
                Toogle={setChange}
                gender={gender}
                id={id}
                animalCat={animal && animal.data}
              />
            )}
          </div>
          <div style={{ margin: '10px' }}>
            <Table
              columns={getAnimalColums(() => null)}
              dataSource={ancestors.data}
              loading={ancestors.loading}
              rowKey={(animal) => animal.id}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
