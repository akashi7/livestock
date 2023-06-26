import { Modal } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function CheckFarmModal({ Toogle, toogle }) {
  const navigate = useNavigate()
  const { get } = useSelector((state) => state.farm)

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
      title='Choose Farm to continue'
      centered
      visible={toogle}
      onOk={() => null}
      onCancel={() => null}
      width={800}
      footer={null}
    >
      <div className='p-4 w-[100%] h-auto bg-white sm:p-6 lg:p-8 border flex flex-wrap'>
        {get?.data?.length === 0 ? (
          <div className='text-center'>
            <p
              onClick={() => navigates()}
              className='cursor-pointer text-center'
            >
              No farm found click to register one
            </p>
          </div>
        ) : (
          get?.data?.map((farm, idx) => {
            return (
              <div
                key={farm?.id}
                className='mb-5 flex flex-row border w-[50%] p-3 border-blue cursor-pointer '
                onClick={() => SetFarm(farm?.id, farm?.name)}
              >
                <p className='text-blue'>{idx + 1}</p>
                <p
                  className='cursor-pointer ml-3   '
                  onClick={() => SetFarm(farm?.id, farm?.name)}
                >
                  {farm?.name}
                </p>
              </div>
            )
          })
        )}
      </div>
    </Modal>
  )
}
