import { Col, Modal, Row, notification } from 'antd'
import { Form, Formik } from 'formik'
import { InputSelect, InputText, InputTextArea } from '../../common/input'
import { AddTreatSchema } from '../validations'
import { Modes, ModeTypes } from '../data/data'

export default function AddTreatmentModal({
  toogle,
  Toogle,
  CreateTreatmentData,
  id,
  TreatmentData,
  dispatch,
  createTreatment,
}) {
  const initialValues = {
    amount: '',
    batch: '',
    cost: '',
    date: '',
    description: '',
    keywords: '',
    mode: '',
    product: '',
    retreat_date: '',
    site: '',
    technician: '',
    type: '',
    withdrawal_date: '',
  }

  function navigates() {
    dispatch(TreatmentData({ param: id }))
    notification.success({
      placement: 'topRight',
      message: 'Treatment Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  function handleSubmit(values) {
    dispatch(
      CreateTreatmentData({
        resName: 'animal',
        id,
        data: values,
        success: navigates,
      })
    )
  }

  return (
    <Modal
      title='Add Treatment'
      centered
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={1000}
      footer={null}
    >
      <div
        className='p-4 w-[100%] h-[580px] bg-white sm:p-6 lg:p-8 overflow-auto '
        id='scroll'
      >
        <Formik
          initialValues={initialValues}
          validationSchema={AddTreatSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-6' action='#'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row mt-10' span={8}>
                <InputText
                  name='date'
                  type='date'
                  placeholder='Date'
                  label='Date'
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputText
                  name='retreat_date'
                  type='date'
                  placeholder='Retreat date'
                  label='Retreat date'
                />
              </Col>

              <Col className='gutter-row mt-10' span={8}>
                <InputText
                  name='batch'
                  type='text'
                  placeholder='batch'
                  label='batch'
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputText
                  name='cost'
                  type='text'
                  placeholder='cost'
                  label='cost'
                />
              </Col>

              <Col className='gutter-row mt-10' span={8}>
                <InputSelect
                  name='type'
                  label='teatment type'
                  options={ModeTypes.map((mode) => ({
                    label: mode,
                    value: mode,
                  }))}
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputSelect
                  name='mode'
                  label='treatment mode'
                  options={Modes.map((mode) => ({
                    label: mode,
                    value: mode,
                  }))}
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputText
                  name='amount'
                  type='text'
                  placeholder='amount'
                  label='amount'
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputText
                  name='product'
                  type='text'
                  placeholder='product'
                  label='product'
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputText
                  name='site'
                  type='text'
                  placeholder='site'
                  label='site'
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputText
                  name='technician'
                  type='text'
                  placeholder='technician'
                  label='technician'
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputText
                  name='keywords'
                  type='text'
                  placeholder='keywords'
                  label='keywords'
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputText
                  name='withdrawal_date'
                  type='date'
                  placeholder='withdrawal_date'
                  label='withdrawal_date'
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputSelect
                  name='per_head'
                  options={[
                    { label: 'Per Head', value: true },
                    { label: 'Total for group', value: false },
                  ]}
                  label='Group distribution'
                />
              </Col>
              <Col className='gutter-row mt-10' span={8}>
                <InputTextArea name='description' label='description' />
              </Col>
            </Row>
            {/* <div className="flex items-center h-5 justify-center">
                            <Spinner />
                        </div> */}
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-40 bg-blue text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-800'
              >
                {createTreatment.loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
