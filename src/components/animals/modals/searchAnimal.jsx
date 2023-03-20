import { Modal, Table, notification } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../../common/search'
import { SearchedAnimal } from '../animals/helper'

export default function SearchAnimalModal({
  toogle,
  Toogle,
  names,
  searchAnimalAction,
  dispatch,
  searchedAnimal,
  addToGroupState,
  AddToGroup,
  groupAnimalId,
  defaultState,
  ViewGroupAnimal,
  handleState,
}) {
  function navigates() {
    notification.success({
      placement: 'topRight',
      message: 'Animal  Added to group Successfully',
      duration: 3,
      key: 'success',
    })
  }
  const name = ''
  const navigate = useNavigate()
  const Dispatch = (animal) => {
    dispatch(
      AddToGroup({
        groupId: groupAnimalId,
        animalId: animal.id,
        success: navigates,
      })
    )
    handleState && dispatch(handleState())
    ViewGroupAnimal && Toogle()
    ViewGroupAnimal && dispatch(ViewGroupAnimal({ groupId: groupAnimalId }))
  }

  useEffect(() => {
    if (addToGroupState && addToGroupState?.status) {
      localStorage.setItem('gId', groupAnimalId)
      navigate(`/vt/group-animal/${groupAnimalId}`)
    }
    return () => defaultState && dispatch(defaultState())
    /* eslint-disable-next-line */
  }, [addToGroupState?.status])

  return (
    <Modal
      title={`Edit ${names}`}
      style={{
        top: 20,
      }}
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={900}
      footer={null}
    >
      <div className='w-[100%]'>
        <Search
          name={name}
          dispatch={dispatch}
          action={searchAnimalAction}
          state={searchedAnimal}
          typeName={'name'}
        />
      </div>
      <div>
        {searchedAnimal.data.length > 0 && (
          <Table
            columns={SearchedAnimal(Dispatch)}
            dataSource={searchedAnimal.data}
            loading={searchedAnimal.loading}
            rowKey={(animals) => animals.id}
          />
        )}
      </div>
    </Modal>
  )
}
