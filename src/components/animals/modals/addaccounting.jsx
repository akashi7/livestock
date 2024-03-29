import { Col, Modal, Row, notification } from 'antd'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import { InputSelect, InputText, InputTextArea } from '../../common/input'
import { Types, expenseTypes, incomeTypes, PaymentType } from '../data/data'
import { AddAccountSchema } from '../validations'

export default function AddAccountModal({
  Toogle,
  toogle,
  animalId,
  createAccstate,
  getAllAcc,
  dispatch,
  createAcc,
  contact,
  isGroup,
  fId,
}) {
  const initialValues = {
    type: '',
    amount: 0,
    date: '',
    vendor: '',
    category: '',
    check_number: '',
    keywords: '',
    description: '',
    payment_system: '',
    reporting_year: '',
  }

  function navigates() {
    dispatch(
      getAllAcc({
        fId,
        param: animalId,
        type: isGroup ? 'livestock_group' : 'animal',
      })
    )
    notification.success({
      placement: 'topRight',
      message: 'Account Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  const expensType = () => {
    return expenseTypes.map((type) => ({ label: type, value: type }))
  }

  const incoType = () => {
    return incomeTypes.map((type) => ({ label: type, value: type }))
  }

  const [type, setType] = useState('')

  const handleSubmit = (values) => {
    values.type = type
    values.vendor = type === 'expense' ? 'payee' : 'customer'
    dispatch(
      createAcc({
        fId,
        id: animalId,
        type: isGroup ? 'livestock_group' : 'animal',
        data: values,
        success: navigates,
      })
    )
  }

  return (
    <Modal
      title='Add Accounting'
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
          validationSchema={AddAccountSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='type'
                  label='type'
                  value={type}
                  options={Types.map((type) => ({
                    label: type,
                    value: type,
                  }))}
                  onChange={(e) => setType(e.target.value)}
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='amount'
                  type='text'
                  placeholder='amount'
                  label='amount'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='date'
                  type='date'
                  placeholder='date'
                  label='date'
                />
              </Col>
              {/* {type && (
                <Col className='gutter-row mt-10' span={12}>
                  <InputSelect
                    name='type'
                    // enable={true}
                    label={type === 'expense' ? 'payee' : 'customer'}
                    options={contact?.data?.map((type) => ({
                      label: type,
                      value: type,
                    }))}
                  />
                </Col>
              )} */}
              <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='category'
                  label='category'
                  options={
                    type === 'expense'
                      ? expensType()
                      : type === 'income'
                      ? incoType()
                      : []
                  }
                />
              </Col>

              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='check_number'
                  type='text'
                  placeholder='check number'
                  label='check number'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='keywords'
                  type='text'
                  placeholder='keywords'
                  label='keywords'
                />
              </Col>
              {type === 'expense' && (
                <Col className='gutter-row mt-10' span={12}>
                  <InputSelect
                    name='payment_system'
                    options={PaymentType.map((mode) => ({
                      label: mode,
                      value: mode,
                    }))}
                    label='payment system'
                  />
                </Col>
              )}

              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='reporting_year'
                  type='text'
                  placeholder='reporting year'
                  label='reporting year'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputTextArea name='description' label='description' />
              </Col>
            </Row>

            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {createAccstate.loading ? 'loading' : 'submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
