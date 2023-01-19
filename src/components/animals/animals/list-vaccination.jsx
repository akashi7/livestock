import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ListVaccinationsData,
  SeeOneAnimal,
  getAnimalCatgories,
  VaccinationData,
  VaccinateAnimal,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import '../animal.css'
import AddVaccinateModal from '../modals/addvaccinate'
import { AnimalVaccinationColmns } from './helper'
import Search from '../../common/search'

function ListVaccinations() {
  const dispatch = useDispatch()
  const { allVaccination, animal, animalsGroupData, vacciData, vatinate } =
    useSelector((state) => state.animal)
  const id = localStorage.getItem('id')
  useEffect(() => {
    dispatch(ListVaccinationsData({ param: id }))
    dispatch(SeeOneAnimal({ params: id }))
    dispatch(getAnimalCatgories())
    dispatch(VaccinationData())
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
              Add new
            </button>
            <div className='w-[60%]  h-[40px]'>
              <Search />
            </div>
            {toogle && (
              <AddVaccinateModal
                id={id}
                animalGroup={animalsGroupData}
                vaccinations={vacciData}
                toogle={toogle}
                Toogle={Toogle}
                VaccinateAnimal={VaccinateAnimal}
                dispatch={dispatch}
                ListVaccinationsData={ListVaccinationsData}
                vatinate={vatinate}
              />
            )}
          </div>

          <br />
          <div style={{ margin: '10px' }}>
            <Table
              columns={AnimalVaccinationColmns}
              dataSource={allVaccination.data}
              loading={allVaccination.loading}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ListVaccinations
