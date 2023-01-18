import { Layout } from 'antd'
import { InputText } from '../input'
import { Form, Formik } from 'formik'
import './index.css'

export default function Search() {
  const { Content } = Layout

  const initialValues = {}
  const validationSchema = {}
  const handleSubmit = () => {}

  return (
    <Content className='ri'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='space-y-3'>
          <div className='pop'>
            <div className='s-input'>
              <InputText name='search' type='text' placeholder='search' />
            </div>
            <div className='s-button'>
              <button
                type='submit'
                className='w-40 h-[46px] bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Search
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Content>
  )
}
