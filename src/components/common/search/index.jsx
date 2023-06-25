import { Layout } from 'antd'
import { Form, Formik } from 'formik'
import { InputText } from '../input'
import './index.css'

export default function Search({
  name,
  dispatch,
  action,
  params,
  state,
  typeName,
  fId,
}) {
  const { Content } = Layout

  const initialValues = { name }
  const handleSubmit = (value) => {
    dispatch(action({ fId, param: value }))
  }

  return (
    <Content className='ri'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='space-y-3'>
          <div className='pop'>
            <div className='s-input'>
              <InputText
                name={typeName ? typeName : 'search'}
                type='text'
                placeholder={typeName ? typeName : 'search'}
                height={'40px'}
              />
            </div>
            <div className='s-button'>
              <button
                type='submit'
                className='ml-[-30px] w-30 h-[38px] bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {state && state.loading ? 'loading' : 'search'}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Content>
  )
}
