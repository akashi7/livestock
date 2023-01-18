import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CreateAnimalNotes,
  SeeOneAnimal,
  retrieveAllanimalNotes,
  GetOneAnimalNote,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import Search from '../../common/search'
import '../animal.css'
import { AddNotesModal, OneNoteModal } from '../modals'
import { NotesColumn } from './helper'

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
          <div style={{ margin: '10px' }}>
            <button
              type='button'
              className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={Toogle}
            >
              New Note
            </button>
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
          <div>
            <Search />
          </div>
          <br />
          <div style={{ margin: '10px' }}>
            <div>
              <Table
                columns={NotesColumn(DispatchOneNote)}
                dataSource={allNotes.data}
                loading={allNotes.loading}
                rowKey={(notes) => notes.id}
                pagination={{
                  defaultPageSize: 5,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ListNotes
