import { Col, Layout, notification, Row } from 'antd'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CreateEventApi } from '../../../state/slices/event.slice'
import { InputText } from '../../common/input'
import { createEventSchema } from '../validation'

export default function CreateEvent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.event)
  const initialValues = {
    start_time: '',
    end_time: '',
    title: '',
    description: '',
  }

  function navigates() {
    notification.success({
      placement: 'topRight',
      message: 'Event created Successfully',
      duration: 3,
      key: 'success',
    })
    setTimeout(() => {
      navigate('/vt/event-list')
    }, 3000)
  }
  function handleSubmit(values) {
    dispatch(CreateEventApi({ data: values, success: navigates }))
  }

  return (
    <Layout className='h-[100vh]  items-center flex'>
      <div className='p-4 w-[60%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8'>
        <Formik
          initialValues={initialValues}
          validationSchema={createEventSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row' span={24}>
                <p className='text-blue'>Create Event</p>
              </Col>
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
    </Layout>
  )
}
