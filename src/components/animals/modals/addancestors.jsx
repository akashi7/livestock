import { Modal, notification } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectInput } from '../../common/input'

export default function AncestorsModal({
  toogle,
  Toogle,
  setChange,
  setGender,
  allMales,
  allFemales,
  addAncestorsApi,
  dispatch,
  animals,
  farmId,
}) {
  function Toogling(gender) {
    Toogle(false)
    setChange(true)
    setGender(gender)
  }

  const navigate = useNavigate()

  const [females, setFemales] = useState('')
  const [males, setMales] = useState('')
  const [animal, setAnimal] = useState('')

  function onChangeMales(e) {
    if (females) {
      setFemales('')
    } else {
      setAnimal(e.target.value)
      setMales(e.target.label)
    }
  }

  function onChangeFemales(e) {
    if (males) {
      setMales('')
    } else {
      setAnimal(e.target.value)
      setFemales(e.target.label)
    }
  }

  function navigates() {
    notification.success({
      placement: 'topRight',
      message: 'Animal Added Successfully',
      duration: 3,
      key: 'success',
    })
    setTimeout(() => {
      navigate('/vt/list-animals')
    }, 3000)
  }

  function AddNew() {
    if (animals) {
      dispatch(
        addAncestorsApi({
          fId: farmId,
          gender: males ? 'male' : 'female',
          id: animals.id,
          data: animals,
          success: navigates,
        })
      )
    }
  }

  return (
    <Modal
      title='Add Ancestors'
      style={{
        top: 20,
      }}
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={800}
      footer={
        animal
          ? [
              <button
                className='w-fit bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                onClick={() => AddNew()}
              >
                save
              </button>,
            ]
          : null
      }
    >
      <div className='p-4 w-[100%] h-auto bg-white sm:p-6 lg:p-8'>
        <div className='flex  justify-between items-center m-[9px]  '>
          <p>Dam (Maternity)</p>
          <div className='w-[60%]'>
            <SelectInput
              name='females'
              value={females && females}
              options={allFemales.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
              onChange={onChangeFemales}
            />
          </div>
          <button
            className='w-fit bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => Toogling('female')}
          >
            Add new
          </button>
        </div>
        <div></div>
        <div className='flex  justify-between items-center  m-[9px]'>
          <p className='leading-5'>Sire (Paternity)</p>
          <div className='w-[60%]'>
            <SelectInput
              name='males'
              value={males && males}
              options={allMales.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
              onChange={onChangeMales}
            />
          </div>

          <button
            className='w-fit bg-blue  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => Toogling('male')}
          >
            Add new
          </button>
        </div>
      </div>
    </Modal>
  )
}
