import { Col, Modal, Row, notification } from 'antd'
import { Form, Formik } from 'formik'
import { InputText } from '../../common/input'
import { AddYieldSchema } from '../validations'

export default function AddYieldModal({
  Toogle,
  toogle,
  CreateYield,
  createYield,
  dispatch,
  id,
  yields,
}) {
  const initialValues = {
    qty: '',
    date: '',
    batch_number: '',
    trace_number: '',
    grade: '',
    Price: '',
    description: '',
  }

  function navigates() {
    dispatch(yields({ param: id }))
    notification.success({
      placement: 'topRight',
      message: 'Animal Yield Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  function handleSubmit(values) {
    dispatch(CreateYield({ id, data: values, success: navigates }))
  }

  return (
    <Modal
      title='Add Yield'
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
          validationSchema={AddYieldSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row' span={24}>
                <p className='text-blue'>Add Yield</p>
              </Col>

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
                  name='qty'
                  type='text'
                  placeholder='quantity'
                  label='Quantity'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='batch_number'
                  type='text'
                  placeholder='batch_number'
                  label='batch number'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='trace_number'
                  type='text'
                  placeholder='trace_number'
                  label='trace number'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='grade'
                  type='text'
                  placeholder='grade'
                  label='grade'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='Price'
                  type='text'
                  placeholder='Price'
                  label='Price'
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
            </Row>

            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {createYield.loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
