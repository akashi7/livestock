import { useState } from 'react'
import AnimalCard from '../../common/Cards'
import '../animal.css'
import { FaTrash } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'
import { SearchAnimalModal } from '../modals'

export default function GroupAnimalDetails({
  props,
  AddToGroup,
  searchAnimalAction,
  searchedAnimal,
  dispatch,
  ViewGroupAnimal,
  handleState,
  fId,
}) {
  const [toogle, setToogle] = useState(false)

  function Toogle() {
    setToogle(!toogle)
    handleState && dispatch(handleState())
  }

  return (
    <div className='container'>
      <div className='left-s'>
        <AnimalCard props={props} group={true} />
      </div>
      <div className='right-s'>
        <div className='flex justify-evenly'>
          <p
            className='text-blue text-base cursor-pointer'
            onClick={() => Toogle()}
          >
            Add animal
          </p>
          <FiEdit2 size={22} color={'#31b0d5'} className='cursor-pointer' />
          <FaTrash size={19} color={'#C70000'} className='cursor-pointer' />
        </div>
      </div>
      {toogle && (
        <SearchAnimalModal
          toogle={toogle}
          Toogle={Toogle}
          names={props?.name}
          searchAnimalAction={searchAnimalAction}
          dispatch={dispatch}
          searchedAnimal={searchedAnimal}
          AddToGroup={AddToGroup}
          groupAnimalId={props?.id}
          ViewGroupAnimal={ViewGroupAnimal}
          handleState={handleState}
          fId={fId}
        />
      )}
    </div>
  )
}
