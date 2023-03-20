import { Col, Modal, Row, notification } from 'antd'
import { Form, Formik } from 'formik'
import { InputText } from '../../common/input'
import { createEventSchema } from '../validations'

export default function AddEventModal({
  Toogle,
  toogle,
  id,
  CreateEventApi,
  loading,
  list,
  dispatch,
}) {
  const initialValues = {
    start_time: '',
    end_time: '',
    title: '',
    description: '',
  }

  function navigates() {
    dispatch(list({ param: id }))
    notification.success({
      placement: 'topRight',
      message: 'Event Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  function handleSubmit(values) {
    console.log({ values })
    dispatch(
      CreateEventApi({
        resName: 'animal',
        id,
        data: values,
        success: navigates,
      })
    )
  }

  return (
    <Modal
      title='Create event'
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
          validationSchema={createEventSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='title'
                  type='text'
                  placeholder='title'
                  label='title'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='description'
                  type='text'
                  placeholder='description'
                  label='description'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='start_time'
                  type='date'
                  placeholder='start'
                  label='start'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='end_time'
                  type='date'
                  placeholder='end'
                  label='end'
                />
              </Col>
            </Row>
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {loading ? 'loading' : 'submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
