import { Layout, notification } from 'antd'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { EditAnimals } from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import { InputSelect, InputText, InputTextArea } from '../../common/input'
import MenuBar from '../../common/menubar/menubar'
import '../animal.css'
import { Status, harvestUnits } from '../data/data'

function EditAnimal() {
  const location = useLocation()
  const Datas = location.state

  const dispatch = useDispatch()
  const { editAnimalS } = useSelector((state) => state.animal)
  const navigate = useNavigate()

  console.log({ Datas })

  let initialValues = {
    name: Datas.name,
    type: Datas.breed,
    breed: Datas.breed,
    keywords: Datas.keywords,
    internal_id: Datas.internal_id,
    status: Datas.status,
    coloring: Datas.caloring,
    description: Datas.description,
    tag_number: Datas.tag_number,
    harvest_unit: Datas.harvest_unit,
    market_price: Datas.market_price,
    estimated_value: Datas.estimated_value,
    is_group: Datas.is_group,
    condition: Datas.condition,
  }
  function navigates() {
    notification.success({
      placement: 'topRight',
      message: 'Animal edited  Successfully',
      duration: 3,
      key: 'success',
    })
    setTimeout(() => {
      navigate(`/vt/animal/${Datas.id}`)
    }, 3000)
  }
  function handleSubmit(values) {
    console.log({ values })
    dispatch(EditAnimals({ id: Datas.id, data: values, success: navigates }))
  }

  return (
    <Layout className='layout-container'>
      <div className='main-container'>
        <MenuBar />
        <div className='leftContainer'>
          <AnimalCard props={Datas} round={true} />
          <div className='items-center'>
            <div className='p-4 w-[80%] my-0 mx-auto h-auto bg-white sm:p-6 lg:p-8 mb-8 '>
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className='space-y-3' action='#'>
                  <div className='animal-create-h'>
                    <p>Basic information</p>
                  </div>

                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>name</span>
                      <div className='w-[80%]'>
                        <InputText
                          name='name'
                          height={'35px'}
                          type='text'
                          placeholder='name'
                        />
                      </div>
                    </div>
                  </div>
                  {Datas && Datas.is_group === true && (
                    <div className='cont'>
                      <div className='kkpoer'>
                        <span className='span'>How Many In Set</span>
                        <div className='w-[80%]'>
                          <InputText
                            name='group_qty'
                            height={'35px'}
                            type='text'
                            placeholder='group qty'
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>Type</span>
                      <div className='w-[80%]'>
                        <InputText
                          name='type'
                          height={'35px'}
                          type='text'
                          placeholder='type'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>Breed</span>
                      <div className='w-[80%]'>
                        <InputText
                          name='breed'
                          height={'35px'}
                          type='text'
                          placeholder='name'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>keywords</span>
                      <div className='w-[80%]'>
                        <InputText
                          name='keywords'
                          type='text'
                          height={'35px'}
                          placeholder='Keywords'
                          // label="earring_num"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>Internal id</span>
                      <div className='w-[80%]'>
                        <InputText
                          name='internal_id'
                          type='text'
                          height={'35px'}
                          placeholder='internal_id'
                          // label="earring_num"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>Status</span>
                      <div className='w-[80%]'>
                        <InputSelect
                          name='status'
                          height={'20px'}
                          options={Status.map((status) => {
                            return {
                              value: status,
                              label: status,
                            }
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>Tag number</span>
                      <div className='w-[80%]'>
                        <InputText
                          name='tag_number'
                          type='text'
                          height={'35px'}
                          placeholder='tag_number'
                          // label="earring_num"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='animal-create-h'>
                    <p>Physical information</p>
                  </div>
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>coloring</span>
                      <div className='w-[80%]'>
                        <InputText
                          name='coloring'
                          type='text'
                          placeholder='coloring'
                          height={'35px'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>condition</span>
                      <div className='w-[80%]'>
                        <InputSelect
                          name='condition_score'
                          height={'35px'}
                          options={[
                            { label: '1', value: 1 },
                            { label: '2', value: 2 },
                            { label: '3', value: 3 },
                            { label: '4', value: 4 },
                            { label: '5', value: 5 },
                          ]}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>description</span>
                      <div className='w-[80%]'>
                        <InputTextArea
                          placeholder='description'
                          name='description'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='animal-create-h'>
                    <p>Additional information</p>
                  </div>
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>Harvest unit</span>
                      <div className='w-[80%]'>
                        <InputSelect
                          name='harvest_unit'
                          height={'20px'}
                          options={harvestUnits.map((harvest) => {
                            return {
                              value: harvest,
                              label: harvest,
                            }
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>Market price</span>
                      <div className='w-[80%]'>
                        <InputText
                          name='market_price'
                          type='text'
                          placeholder='market_price'
                          height={'35px'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cont'>
                    <div className='kkpoer'>
                      <span className='span'>Est value</span>
                      <div className='w-[80%]'>
                        <InputText
                          name='estimated_value'
                          type='text'
                          placeholder='estimated_value'
                          height={'35px'}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center justify-center'>
                    <button
                      type='submit'
                      className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                      {editAnimalS.loading ? 'Loading' : 'Submit'}
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default EditAnimal
