import { Modal, notification } from 'antd'
import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputSelect, InputText, InputTextArea } from '../../common/input'
import { AddGroupSchema } from '../validations'

export default function AddGroupModal({
  toogle,
  Toogle,
  dispatch,
  getAnimals,
  addAnimal,
  createAnimalGroup,
  Farms,
  defaultState,
  setTrigger,
  setData,
}) {
  const initialValues = {
    name: '',
    description: '',
    farm_id: 1,
  }

  const navigate = useNavigate()

  const [state, setState] = useState({
    type: 'set',
  })

  function ChangeType(e) {
    setState({
      type: e.target.value,
    })
  }

  useEffect(() => {
    setFarmers()
    /* eslint-disable-next-line */
  }, [Farms.data])

  const [farmers, setfarmers] = useState([])

  function navigates() {
    dispatch(getAnimals())
    notification.success({
      placement: 'topRight',
      message: 'Animal group Added Successfully',
      duration: 3,
      key: 'success',
    })
  }

  useEffect(() => {
    if (createAnimalGroup && createAnimalGroup.data && state.type === 'set') {
      navigate(`/vt/animal/${createAnimalGroup.data.id}/edit`, {
        state: createAnimalGroup.data,
      })
    }
    if (createAnimalGroup && createAnimalGroup.data && state.type === 'basic') {
      setTrigger(true)
      Toogle(false)
      setData(createAnimalGroup.data)
    }
    return () => dispatch(defaultState())
    //eslint-disable-next-line
  }, [createAnimalGroup])

  function handleSubmit(values) {
    values.type = state.type
    dispatch(addAnimal({ data: values, success: navigates }))
  }

  function setFarmers() {
    let array = []
    Farms.data.map((item) => {
      array.push({
        value: item.id,
        label: item.name,
      })
      return true
    })
    setfarmers(array)
  }

  return (
    <Modal
      title='Add group'
      style={{
        top: 20,
      }}
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={800}
      footer={null}
    >
      <div className='p-4 w-[100%] h-auto bg-white sm:p-6 lg:p-8'>
        <Formik
          initialValues={initialValues}
          validationSchema={AddGroupSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>Group Name</span>
                <div className='w-[80%]'>
                  <InputText
                    name='name'
                    height={'35px'}
                    type='text'
                    placeholder='name'
                  />
                </div>
              </div>

              <div className='kkpoer'>
                <span className='span'>Farmers</span>
                <div className='w-[80%]'>
                  <InputSelect
                    name='farm_id'
                    height={'20px'}
                    options={farmers}
                    // label="Select Farm"
                  />
                </div>
              </div>

              <div className='kkpoer'>
                <span className='span'>Description</span>
                <div className='w-[80%]'>
                  <InputTextArea placeholder='description' name='description' />
                </div>
              </div>
              <div className='kkpoer'>
                <span className='span'>Type</span>
                <div className='flex  flex-col  w-[20%]'>
                  <div className=' flex flex-row justify-start m-[5px] '>
                    <input
                      type={'radio'}
                      id='set'
                      className='w-[80%]'
                      value={'set'}
                      onChange={ChangeType}
                      checked={state.type === 'set'}
                    />
                    <label htmlFor='set' className='w-[80%] '>
                      Set
                    </label>
                  </div>
                  <div className=' flex flex-row justify-start m-[5px]  '>
                    <input
                      type={'radio'}
                      id='basic'
                      className='w-[80%]'
                      value={'basic'}
                      checked={state.type === 'basic'}
                      onChange={ChangeType}
                    />
                    <label htmlFor='basic' className='w-[80%] '>
                      Basic
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {createAnimalGroup.loading ? 'loading' : 'submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
