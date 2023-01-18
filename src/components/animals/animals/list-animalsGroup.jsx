import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAnimalsGroup } from '../../../state/slices/animal.slice'
import { AddGroupModal } from '../modals'
import { AnimalsGroupcolumns } from './helper'

function ListAnimalsGroup() {
  const dispatch = useDispatch()
  const { animalsGroupData } = useSelector((state) => state.animal)
  useEffect(() => {
    dispatch(getAllAnimalsGroup())
    /* eslint-disable-next-line */
  }, [])

  const [toogle, setToogle] = useState(false)

  function Toogle() {
    setToogle(!toogle)
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
        {toogle && <AddGroupModal toogle={toogle} Toogle={setToogle} />}
      </div>
      <div>
        <Table
          columns={AnimalsGroupcolumns}
          dataSource={animalsGroupData.data}
          loading={animalsGroupData.loading}
        />
      </div>
    </Layout>
  )
}
export default ListAnimalsGroup
