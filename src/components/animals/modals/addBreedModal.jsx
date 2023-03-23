import { Col, Modal, Row, notification } from 'antd'
import { Form, Formik } from 'formik'
import { InputText, InputTextArea, InputSelect } from '../../common/input'
import { AddBreedSchema } from '../validations'
import { breedAnimalStatus, breedingMethod } from '../data/data'

export default function AddBreedModal({
  Toogle,
  toogle,
  CreateYield,
  createYield,
  dispatch,
  id,
  yields,
}) {
  const initialValues = {
    date: '',
    update_animal_status: '',
    breeding_method: '',
    technicial: '',
    amount: '',
    unit: '',
    cost: '',
    description: '',
  }

  function navigates() {
    dispatch(yields({ param: id }))
    notification.success({
      placement: 'topRight',
      message: 'Animal Breed Added Successfully',
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
      title='Add Breed'
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
          validationSchema={AddBreedSchema}
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
                <InputSelect
                  name='update_animal_status'
                  label='status'
                  options={breedAnimalStatus.map((status) => {
                    return {
                      value: status,
                      label: status,
                    }
                  })}
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='breeding_method'
                  label='method'
                  options={breedingMethod.map((method) => {
                    return {
                      value: method,
                      label: method,
                    }
                  })}
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='technicial'
                  type='text'
                  placeholder='technicial'
                  label='technicial'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='amount'
                  type='text'
                  placeholder='amount'
                  label='Amount'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='unit'
                  type='text'
                  placeholder='unit'
                  label='Unit'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='cost'
                  type='text'
                  placeholder='Cost'
                  label='Cost'
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
