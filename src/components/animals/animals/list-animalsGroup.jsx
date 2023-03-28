import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addAnimalGroup,
  getAllAnimalsGroup,
  handleState,
  searchAnimalAction,
  AddToGroup,
} from '../../../state/slices/animal.slice'
import { getAllFarms } from '../../../state/slices/farm.slice'
import '../animal.css'
import { AddGroupModal, SearchAnimalModal } from '../modals'
import { AnimalsGroupcolumns } from './helper'
import { useNavigate } from 'react-router-dom'

function ListAnimalsGroup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    animalsGroupData,
    createAnimalGroup,
    searchedAnimal,
    addToGroupState,
  } = useSelector((state) => state.animal)
  const { get } = useSelector((state) => state.farm)
  useEffect(() => {
    dispatch(getAllAnimalsGroup())
    dispatch(getAllFarms())
    /* eslint-disable-next-line */
  }, [])

  const [toogle, setToogle] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const [Data, setData] = useState(null)

  function Toogle() {
    setToogle(!toogle)
  }

  function Dispatch(groupanimal) {
    if (groupanimal.type === 'set') {
      localStorage.setItem('id', groupanimal.id)
      navigate(`/vt/animal/${groupanimal.id}`)
    } else {
      localStorage.setItem('gId', groupanimal.id)
      navigate(`/vt/group-animal/${groupanimal.id}`)
    }
  }

  return (
    <Layout className='h-[100%] w-full'>
      <div className='mb-[10px]'>
        <button
          type='button'
          className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={Toogle}
        >
          New Group
        </button>
        {toogle && (
          <AddGroupModal
            toogle={toogle}
            Toogle={setToogle}
            dispatch={dispatch}
            getAnimals={getAllAnimalsGroup}
            addAnimal={addAnimalGroup}
            createAnimalGroup={createAnimalGroup}
            Farms={get}
            defaultState={handleState}
            setData={setData}
            setTrigger={setTrigger}
          />
        )}
        {trigger && (
          <SearchAnimalModal
            toogle={trigger}
            Toogle={setTrigger}
            names={Data?.name}
            searchAnimalAction={searchAnimalAction}
            dispatch={dispatch}
            searchedAnimal={searchedAnimal}
            addToGroupState={addToGroupState}
            AddToGroup={AddToGroup}
            groupAnimalId={Data?.id}
            defaultState={handleState}
          />
        )}
      </div>
      <br />
      <div>
        <Table
          columns={AnimalsGroupcolumns(Dispatch)}
          dataSource={animalsGroupData.data}
          loading={animalsGroupData.loading}
          rowKey={(animals) => animals.id}
        />
      </div>
    </Layout>
  )
}
export default ListAnimalsGroup
