import { Modal } from 'antd'
import { getAllFarms } from '../../../state/slices/farm.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function CheckFarmModal({ Toogle, toogle }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { get } = useSelector((state) => state.farm)
  useEffect(() => {
    dispatch(getAllFarms())
    /* eslint-disable-next-line */
  }, [])

  function navigates() {
    navigate('/vt/add-farm')
    Toogle(false)
  }

  function SetFarm(id, name) {
    localStorage.setItem('fId', id)
    localStorage.setItem('fName', name)
    navigate('/vt/')
    Toogle(false)
  }

  return (
    <Modal
      title='Choose Farm'
      centered
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={800}
      footer={null}
    >
      <div className='p-4 w-[100%] h-auto bg-white sm:p-6 lg:p-8'>
        {get?.data?.length === 0 ? (
          <div>
            <p onClick={() => navigates()} className='cursor-pointer'>
              No farm found click to register one
            </p>
          </div>
        ) : (
          get?.data?.map((farm, idx) => {
            return (
              <div key={farm?.id} className='mb-5'>
                <p
                  className='cursor-pointer'
                  onClick={() => SetFarm(farm?.id, farm?.name)}
                >
                  {' '}
                  {farm?.name}{' '}
                </p>
              </div>
            )
          })
        )}
      </div>
    </Modal>
  )
}
