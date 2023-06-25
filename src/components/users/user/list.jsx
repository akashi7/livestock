import { Layout, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FarmAddUsersLists,
  FarmGetUsersLists,
} from '../../../state/slices/farm.slice'
import AddUserModal from '../../animals/modals/addUser'
import { UsersListsColumns } from './helper'

const UsersLists = ({ farmId }) => {
  const dispatch = useDispatch()
  const { users, user } = useSelector((state) => state.farm)

  const [toogle, setToggle] = useState(false)

  function Toogle() {
    setToggle(!toogle)
  }

  useEffect(() => {
    dispatch(FarmGetUsersLists({ farmId }))
    /* eslint-disable-next-line */
  }, [])

  return (
    <Layout className='h-[100%] w-full'>
      <div className='mb-5 mt-5 flex justify-between items-center '>
        {users?.data?.length} Users
        <button
          type='button'
          className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={Toogle}
        >
          New User
        </button>
      </div>
      {toogle && (
        <AddUserModal
          toogle={toogle}
          Toogle={setToggle}
          dispatch={dispatch}
          state={user}
          action={FarmAddUsersLists}
          farmId={farmId}
          getAllUsers={FarmGetUsersLists}
        />
      )}
      <div>
        <Table
          columns={UsersListsColumns}
          dataSource={users.data}
          loading={users.loading}
          pagination={{
            defaultPageSize: 5,
          }}
        />
      </div>
    </Layout>
  )
}

export default UsersLists
