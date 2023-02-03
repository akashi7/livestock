import { Col, Modal, notification, Row } from 'antd'
import { Form, Formik } from 'formik'
import { InputSelect, InputText, InputTextArea } from '../../common/input'
import { vaccinationSchema } from '../validations'

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
}) {
  const initialValues = {
    onsetDate: '',
    description: '',
    vaccinationId: '',
    groupAnimalId: '',
    quantity: '',
    nextAppointment: '',
  }

  function navigates() {
    dispatch(ListVaccinationsData({ param: id }))
    notification.success({
      placement: 'topRight',
      message: 'Animal vaccination Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  const handleSubmit = (values) => {
    dispatch(
      VaccinateAnimal({
        resName: 'animal',
        id,
        data: values,
        success: navigates,
      })
    )
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
              <Col className='gutter-row' span={24}>
                <p className='text-blue'>Vaccinated Animal</p>
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='onsetDate'
                  type='date'
                  placeholder='onsetDate'
                  label='onset Date'
                />
              </Col>

              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='nextAppointment'
                  type='date'
                  placeholder='nextAppointment'
                  label='next Appointment'
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
                <InputSelect
                  name='vaccinationId'
                  options={vaccinations?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label='Select vaccination Id'
                />
              </Col>
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
