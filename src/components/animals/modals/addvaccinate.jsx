import { Col, Modal, notification, Row } from 'antd'
import { Form, Formik } from 'formik'
import { InputSelect, InputText, InputTextArea } from '../../common/input'
import { vaccinationSchema } from '../validations'
import { useState } from 'react'
import { MeasurementsData } from '../data/data'

export default function AddVaccinateModal({
  Toogle,
  toogle,
  vaccinations,
  animalGroup,
  id,
  dispatch,
  VaccinateAnimal,
  ListVaccinationsData,
  vatinate,
  fId,
}) {
  const initialValues = {
    onsetDate: '',
    description: '',
    groupAnimalId: '',
    quantity: '',
    nextAppointment: '',
    vaccination_name: '',
    price: '',
    measurement: '',
  }

  function navigates() {
    dispatch(ListVaccinationsData({ fId, param: id }))
    notification.success({
      placement: 'topRight',
      message: 'Animal vaccination Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  const handleSubmit = (values) => {
    // values.per_head = state.value
    dispatch(
      VaccinateAnimal({
        fId,
        resName: 'animal',
        id,
        data: values,
        success: navigates,
      })
    )
  }

  const [state, setState] = useState({
    value: 'false',
  })

  function ChangeType(e) {
    setState({ ...state, value: e.target.value })
  }

  return (
    <Modal
      title='Vaccinate'
      centered
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={800}
      footer={null}
    >
      <div className='p-4 w-[100%] h-auto bg-white  sm:p-6 lg:p-8'>
        <Formik
          initialValues={initialValues}
          validationSchema={vaccinationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='onsetDate'
                  type='date'
                  placeholder='onsetDate'
                  label='onset Date'
                />
              </Col>
              {/* <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='per_head'
                  options={[
                    { label: 'Per Head', value: true },
                    { label: 'Total for group', value: false },
                  ]}
                  label='Group distribution'
                />
              </Col> */}
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='nextAppointment'
                  type='date'
                  placeholder='nextAppointment'
                  label='Next appointment'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='vaccination_name'
                  type='text'
                  placeholder='vaccination name'
                  label='vaccination name'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='quantity'
                  type='text'
                  placeholder='quantity'
                  label='Quantity'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='price'
                  type='text'
                  placeholder='price'
                  label='price'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='measurement'
                  options={MeasurementsData.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                  label='Select Measurement'
                />
              </Col>
              {/* <div className='mt-10 ml-2'>
                <div className='kkpoer'>
                  <span className='span'>distribution</span>
                  <div className='flex  flex-row  w-[100%]'>
                    <div className=' flex flex-row justify-start m-[5px] items-center'>
                      <input
                        type={'radio'}
                        className='w-[70%]'
                        value={'true'}
                        onChange={ChangeType}
                        checked={state.value === 'true'}
                      />
                      <label className='w-[170px] '>Per Head</label>
                    </div>
                    <div className=' flex flex-row justify-start m-[5px] items-center  '>
                      <input
                        type={'radio'}
                        className='w-[70%]'
                        value={'false'}
                        checked={state.value === 'false'}
                        onChange={ChangeType}
                      />
                      <label className='w-[170px] '>Total for group</label>
                    </div>
                  </div>
                </div>
              </div> */}
              <Col className='gutter-row mt-10' span={12}>
                <InputTextArea
                  name='description'
                  placeholder='description'
                  label='description'
                />
              </Col>
            </Row>
            {/* <div className="flex items-center h-5 justify-center">
                            <Spinner />
                        </div> */}
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {vatinate.loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
