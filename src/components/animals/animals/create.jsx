import { Layout, notification } from 'antd'
import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  addAncestorsApi,
  animal,
  getAllPurposeData,
  getAnimalCatgories,
} from '../../../state/slices/animal.slice'
import { getAllFarms } from '../../../state/slices/farm.slice'
import { InputSelect, InputText, InputTextArea } from '../../common/input'
import '../animal.css'
import {
  BreedStatus,
  Status,
  harvestUnits,
  onFeed,
  purchased,
} from '../data/data'
import { addFarmerSchema } from '../validations'

function CreateAnimal({ newgender, id, animalCat, farmId }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, ancestor } = useSelector((state) => state.animal)
  const { get } = useSelector((state) => state.farm)
  const animalCatgories = useSelector((state) => state.animal.categories)
  const puporseData = useSelector((state) => state.animal.purposeData)

  const initialValues = animalCat
    ? animalCat
    : {
        animalCategory_id: '',
        earring_num: '',
        farm_id: '',
        purpose_id: '',
        birth_date: '',
        birth_weight: 0,
        breed: '',
        breeding_status: '',
        coloring: '',
        condition_score: 0,
        description: '',
        harvest_unit: '',
        keywords: '',
        name: '',
        on_feed: false,
        purchase_price: 0,
        purchased: false,
        retention_score: 0,
        status: '',
        type: '',
      }
  const [farmers, setfarmers] = useState([])
  const [gender, setGender] = useState('')

  useEffect(() => {
    setFarmers()
    /* eslint-disable-next-line */
  }, [get.data])
  useEffect(() => {
    dispatch(getAllFarms())
    dispatch(getAllPurposeData({ fId: farmId }))
    dispatch(getAnimalCatgories({ fId: farmId }))
    /* eslint-disable-next-line */
  }, [])
  function setFarmers() {
    let array = []
    get.data.map((item) => {
      array.push({
        value: item.id,
        label: item.name,
      })
      return true
    })
    setfarmers(array)
  }

  useEffect(() => {
    newgender && newgender && setGender(newgender)
  }, [newgender])

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

  const [purchaseState, setPurchase] = useState(false)

  const handleSubmit = (values) => {
    values.farm_id = farmId
    values.is_group = false
    values.is_neutered = false
    values.breeding_stock = false
    values.gender = gender
    values.registry_number = '622222'
    values.tag_color = 'er'
    values.tag_number = '23'
    values.electronic_id = '445td'
    values.type = 'type'
    values.harvest_label = 'yuuu'
    values.height = '78'
    values.weight = '87'
    values.purchased = purchaseState
    newgender
      ? dispatch(
          addAncestorsApi({
            fId: farmId,
            gender: gender,
            id,
            data: values,
            success: navigates,
          })
        )
      : dispatch(animal({ fId: farmId, data: values, success: navigates }))
  }
  return (
    <Layout className='h-[100%] items-center flex overflow-auto' id='scroll'>
      <div
        className={`p-4 w-[${
          newgender ? '100%' : '80%'
        }] h-auto bg-white rounded-lg ${
          !newgender && 'border border-gray-200'
        } shadow-md sm:p-6 lg:p-8 mb-8 `}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={addFarmerSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-3' action='#'>
            {!newgender && <p className=' text-lg p-[5px]'>New Animal</p>}
            <div className='animal-create-h'>
              <p>Basic information</p>
            </div>

            {/* {!newgender && (
              <div className='cont'>
                <div className='kkpoer'>
                  <span className='span'>Select Farm</span>
                  <div className='w-[80%]'>
                    <InputSelect
                      name='farm_id'
                      height={'20px'}
                      options={farmers}
                      // label="Select Farm"
                    />
                  </div>
                </div>
              </div>
            )} */}

            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>category</span>
                <div className='w-[80%]'>
                  <InputSelect
                    name='animalCategory_id'
                    height={'20px'}
                    options={animalCatgories?.data.map((item) => ({
                      label: item.name,
                      value: item.id,
                    }))}
                    // label="Select Animal Category"
                  />
                </div>
              </div>
            </div>
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>Name</span>
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
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>earring num</span>
                <div className='w-[80%]'>
                  <InputText
                    name='earring_num'
                    type='text'
                    height={'35px'}
                    placeholder='earring num'
                    // label="earring_num"
                  />
                </div>
              </div>
            </div>
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>Gender</span>
                <div className='w-[80%]'>
                  <InputSelect
                    name='gender'
                    value={gender}
                    required
                    height={'20px'}
                    options={[
                      { label: 'Male', value: 'male' },
                      { label: 'Female', value: 'female' },
                    ]}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>purpose</span>
                <div className='w-[80%]'>
                  <InputSelect
                    name='purpose_id'
                    height={'20px'}
                    options={puporseData?.data.map((item) => ({
                      label: item.name,
                      value: item.id,
                    }))}
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
                <span className='span'>breed</span>
                <div className='w-[80%]'>
                  <InputText
                    name='breed'
                    height={'35px'}
                    type='text'
                    placeholder='breed'
                  />
                </div>
              </div>
            </div>
            {gender && gender === 'female' ? (
              <div className='cont'>
                <div className='kkpoer'>
                  <span className='span'>breed status</span>
                  <div className='w-[80%]'>
                    <InputSelect
                      name='breeding_status'
                      height={'20px'}
                      options={BreedStatus.map((breed) => {
                        return {
                          value: breed,
                          label: breed,
                        }
                      })}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>keywords</span>
                <div className='w-[80%]'>
                  <InputText
                    name='keywords'
                    type='text'
                    placeholder='keywords'
                    height={'35px'}
                  />
                </div>
              </div>
            </div>
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>birth date</span>
                <div className='w-[80%]'>
                  <InputText
                    name='birth_date'
                    type='date'
                    placeholder='birth_date'
                    height={'35px'}
                  />
                </div>
              </div>
            </div>
            <div className='animal-create-h'>
              <p>Physical information</p>
            </div>
            {/* <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>weight</span>
                <div className='w-[80%]'>
                  <InputText
                    name='weight'
                    type='text'
                    placeholder='weight'
                    height={'35px'}
                  />
                </div>
              </div>
            </div> */}
            {/* <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>height</span>
                <div className='w-[80%]'>
                  <InputText
                    name='height'
                    type='text'
                    placeholder='height'
                    height={'35px'}
                  />
                </div>
              </div>
            </div> */}
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
            {/* <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>retention</span>
                <div className='w-[80%]'>
                  <InputText
                    name='retention_score'
                    type='text'
                    placeholder='retention_score'
                    height={'35px'}
                  />
                </div>
              </div>
            </div> */}
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>description</span>
                <div className='w-[80%]'>
                  <InputTextArea
                    placeholder='description'
                    name='description'
                    height={'35px'}
                  />
                </div>
              </div>
            </div>
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>birth weight</span>
                <div className='w-[80%]'>
                  <InputText
                    name='birth_weight'
                    type='text'
                    placeholder='birth_weight'
                    height={'35px'}
                  />
                </div>
              </div>
            </div>
            <div className='animal-create-h'>
              <p>Additional information</p>
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
            {/* <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>harvest label</span>
                <div className='w-[80%]'>
                  <InputText
                    name='harvest_label'
                    type='text'
                    placeholder='harvest_label'
                    height={'35px'}
                  />
                </div>
              </div>
            </div> */}
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>harvest unit</span>
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
                <span className='span'>On feed</span>
                <div className='w-[80%]'>
                  <InputSelect
                    name='on_feed'
                    height={'20px'}
                    options={onFeed.map((feed) => {
                      return {
                        value: feed.value,
                        label: feed.label,
                      }
                    })}
                  />
                </div>
              </div>
            </div>
            <div className='cont'>
              <div className='kkpoer'>
                <span className='span'>purchased</span>
                <div className='w-[80%]'>
                  <InputSelect
                    name='purchased'
                    height={'20px'}
                    value={purchaseState}
                    options={purchased.map((feed) => {
                      return {
                        value: feed.value,
                        label: feed.label,
                      }
                    })}
                    onChange={(e) => setPurchase(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {purchaseState === 'true' && (
              <div className='cont'>
                <div className='kkpoer'>
                  <span className='span'>purchase price</span>
                  <div className='w-[80%]'>
                    <InputText
                      name='purchase_price'
                      type='text'
                      placeholder='purchase_price'
                      height={'35px'}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* <Col className="gutter-row" span={24}>
                <p className="text-blue">Add Animal</p>
              </Col> */}

            {/* <Col className="gutter-row" span={24}>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div className="header">
                    <h1 className="title">Basic information</h1>
                  </div>
                </div>
              </Col>

              <Col className="gutter-row mt-10 w-[100px] bg-slate-800 items-center p-[3px] " span={6}>
                <div className="kkpoer" >
                  <span className="span">Select Farm</span>
                 <div className="akashi" >
                 <InputSelect
                  name="farm_id"
                  options={farmers}
                  // label="Select Farm"
                />
                 </div>
                </div>
                
              </Col> */}

            {/* 
              <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}
            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}
            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}
            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}

            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}

            {/* <Col className="gutter-row" span={24}>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div className="header">
                    <h1 className="title">Physical information</h1>
                  </div>
                </div>
              </Col> */}
            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}
            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}
            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col>
              <Col className="gutter-row mt-10" span={6}>
               
              </Col> */}

            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}

            {/* <Col className="gutter-row" span={24}>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div className="header">
                    <h1 className="title">Additional information</h1>
                  </div>
                </div>
              </Col> */}

            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}
            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}
            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}
            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}

            {/* <Col className="gutter-row mt-10" span={6}>
                
              </Col> */}

            {/* <div className="flex items-center h-5 justify-center">
                            <Spinner />
                        </div> */}
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {loading
                  ? 'Loading...'
                  : ancestor.loading
                  ? 'Loading...'
                  : 'Submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  )
}
export default CreateAnimal
