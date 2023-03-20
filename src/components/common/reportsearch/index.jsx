import { Layout } from 'antd'
import { Form, Formik } from 'formik'
import { InputText } from '../input'
import './index.css'

export default function SearchReport({ disabled }) {
  const initialValues = {}
  const handleSubmit = () => {}
  return (
    <Layout.Content className='ru'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='space-y-3'>
          <div className='pop'>
            {disabled ? null : (
              <div className='s-inputs'>
                <InputText
                  name={'search'}
                  type='text'
                  placeholder={'search'}
                  height={'40px'}
                />
              </div>
            )}
            <div className='s-inputs'>
              <InputText
                name={'from'}
                type='date'
                height={'40px'}
                placeholder={'from date'}
              />
            </div>

            <div className='s-inputs'>
              <InputText
                name={'to'}
                type='date'
                height={'40px'}
                placeholder={'to date'}
              />
            </div>
            <div className='s-button'>
              <button
                type='submit'
                className='ml-[-30px] w-30 h-[38px] bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {'search'}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Layout.Content>
  )
}
