import { Col, Modal, notification, Row } from 'antd'
import { Form, Formik } from 'formik'
import { InputText } from '../../common/input'
import { AddMeasuremtSchema } from '../validations'

export default function MeasurementModel({
  toogle,
  Toogle,
  dispatch,
  create,
  measures,
  GetALLMesurementsData,
  id,
}) {
  const initialValues = {
    height: '',
    date: '',
    weight: '',
    // condition_score: null,
    // fec: null,
  }

  function navigates() {
    dispatch(GetALLMesurementsData({ param: id }))
    notification.success({
      placement: 'topRight',
      message: 'Measurement Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  function handleSubmit(values) {
    values.condition_score = null
    values.fec = null
    dispatch(create({ id, data: values, success: navigates }))
  }

  return (
    <Modal
      title='Add new Measurement'
      centered
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={800}
      footer={null}
    >
      <div className='p-4 w-[100%] h-auto bg-white sm:p-6 lg:p-8'>
        <Formik
          initialValues={initialValues}
          validationSchema={AddMeasuremtSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='date'
                  type='date'
                  placeholder='date'
                  label='date'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='height'
                  type='text'
                  placeholder='height'
                  label='height'
                />
              </Col>

              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='weight'
                  type='text'
                  placeholder='weight'
                  label='weight'
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
                {measures.loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
