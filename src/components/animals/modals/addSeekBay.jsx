import { Col, Modal, Row, notification } from 'antd'
import { Form, Formik } from 'formik'
import { InputSelect, InputText } from '../../common/input'
import { addAnimalSickSchema } from '../validations'

export default function AddSeekBayModal({
  Toogle,
  toogle,
  loading,
  categories,
  dispatch,
  createSickBy,
  id,
  medecines,
  getAllAnimalsSickbay,
}) {
  const initialValues = {
    onsetDate: '',
    animalCategoryId: '',
    intervention: '',
    observation: '',
    quantity: '',
    medicineId: '',
  }

  function navigates() {
    dispatch(getAllAnimalsSickbay({ param: id }))
    notification.success({
      placement: 'topRight',
      message: 'Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  const handleSubmit = (values) => {
    dispatch(
      createSickBy({ resName: 'animal', id, data: values, success: navigates })
    )
  }

  return (
    <Modal
      title='Quantity (milliliters)'
      centered
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={800}
      footer={null}
    >
      <div className='p-4 w-[100%] h-auto bg-white rounded-lg  sm:p-6 lg:p-8'>
        <Formik
          initialValues={initialValues}
          validationSchema={addAnimalSickSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='animalCategoryId'
                  options={categories?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label='Select Animal Category'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='per_head'
                  options={[
                    { label: 'Per Head', value: true },
                    { label: 'Total for group', value: false },
                  ]}
                  label='Group distribution'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='intervention'
                  type='text'
                  placeholder='Intervention'
                  label='Intervention'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='observation'
                  type='text'
                  placeholder='Observation'
                  label='Observation'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='quantity'
                  type='text'
                  placeholder='Quantity'
                  label='Quantity'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='onsetDate'
                  type='date'
                  placeholder='onsetDate'
                  label='OnsetDate'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='medicineId'
                  options={medecines?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label='Select Medecine'
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
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
