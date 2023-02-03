import { Layout } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import {
  CreateAnimalNotes,
  GetOneAnimalNote,
  SeeOneAnimal,
  retrieveAllanimalNotes,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import Search from '../../common/search'
import '../animal.css'
import { AddNotesModal, OneNoteModal } from '../modals'

function ListNotes() {
  const dispatch = useDispatch()

  const { allNotes, animal, createNote, oneNote } = useSelector(
    (state) => state.animal
  )
  const id = localStorage.getItem('id')
  useEffect(() => {
    dispatch(retrieveAllanimalNotes({ param: id }))
    dispatch(SeeOneAnimal({ params: id }))
    /* eslint-disable-next-line */
  }, [])

  const [toogle, setToogle] = useState(false)

  function Toogle() {
    setToogle(!toogle)
  }

  const DispatchOneNote = (record) => {
    setModal(!modal)
    dispatch(GetOneAnimalNote({ resName: 'animal', resId: id, id: record.id }))
  }

  const [modal, setModal] = useState(false)

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
              New Note
            </button>
            <div className='w-[60%]  h-[40px]'>
              <Search />
            </div>
            {toogle && (
              <AddNotesModal
                Toogle={setToogle}
                toogle={toogle}
                dispatch={dispatch}
                CreateAnimalNotes={CreateAnimalNotes}
                createNote={createNote}
                id={id}
                allNotes={retrieveAllanimalNotes}
              />
            )}
            {modal && (
              <OneNoteModal
                toogle={modal}
                Toogle={setModal}
                OneNote={oneNote}
              />
            )}
          </div>

          <br />
          <div style={{ margin: '10px' }}>
            <div>
              {allNotes.data.map((note, idx) => {
                return (
                  <div
                    key={idx}
                    className='flex justify-between m-[10px] w-[100%] items-center bg-smoke p-[10px] border-l-4 border-blue'
                  >
                    <div className='flex flex-col'>
                      <p className='m-1'>
                        {' '}
                        {moment(note.date).format('MM/DD/YYYY')}{' '}
                      </p>
                      <p className='m-1'> {note.description} </p>
                      <p className='bg-black w-[100%] p-[5px] text-white m-1'>
                        {' '}
                        {note.category}{' '}
                      </p>
                    </div>
                    <div className='flex justify-between  items-center'>
                      <FiEdit2
                        size={22}
                        color={'#31b0d5'}
                        className='cursor-pointer m-[5px]'
                      />
                      <FaTrash
                        size={19}
                        color={'#C70000'}
                        className='cursor-pointer m-[5px]'
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ListNotes
