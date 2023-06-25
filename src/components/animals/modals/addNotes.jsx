import { Col, Modal, Row, notification } from 'antd'
import { Form, Formik } from 'formik'
import { InputSelect, InputText, InputTextArea } from '../../common/input'
import { categoriesData } from '../data/data'
import { AddNotesSchema } from '../validations'

export default function AddNotesModal({
  Toogle,
  toogle,
  createNote,
  id,
  allNotes,
  dispatch,
  CreateAnimalNotes,
  fId,
}) {
  const initialValues = {
    date: '',
    description: '',
    category: '',
    keywords: '',
  }

  function navigates() {
    dispatch(allNotes({ fId, param: id }))
    notification.success({
      placement: 'topRight',
      message: 'Note Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  function handleSubmit(values) {
    dispatch(
      CreateAnimalNotes({
        fId,
        resName: 'animal',
        id,
        data: values,
        success: navigates,
      })
    )
  }
  return (
    <Modal
      title='New note'
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
          validationSchema={AddNotesSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='category'
                  label='category'
                  options={categoriesData.map((category) => {
                    return {
                      value: category,
                      label: category,
                    }
                  })}
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
              <Col className='gutter-row mt-10' span={12}>
                <InputTextArea
                  name='description'
                  placeholder='description'
                  label='Description'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='keywords'
                  type='text'
                  placeholder='keywords (title)'
                  label='Keywords (title)'
                />
              </Col>
            </Row>

            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {createNote.loading ? 'Loading....' : 'Submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
