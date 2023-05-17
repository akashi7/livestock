import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { authSignUp } from '../../state/slices/auth.slice'
import { InputText } from '../common/input'
import { Spinner } from '../common/spinner'
import { signUpSchema } from './validations'
import { Col, Row } from 'antd'
const SignUp = () => {
  const { loader } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const successFull = () => {
    navigate('/vt/')
  }
  const initialValues = {
    email: '',
    password: '',
    occupation: 0,
    firstname: '',
    lastname: '',
    username: '',
  }
  const handleSubmit = (values) => {
    dispatch(authSignUp({ data: values, success: successFull }))
  }
  return (
    <div className='h-[100vh] w-[100%] items-center justify-center flex flex-row'>
      <div className='w-[30%] h-[650px] flex justify-center items-start flex-col bg-white shadow-md border border-gray-200 lg:p-8 bg-signup'>
        <h2 className='ml-7 mt-1 text-white'>Welcome</h2>
        <h1 className='ml-6 text-white text-[2rem]'>LiveStock bank</h1>
      </div>
      <div className='p-4 w-[37%] h-[650px] bg-white  border border-gray-200 shadow-md sm:p-6 lg:p-8'>
        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <h5 className='text-xl font-medium text-center text-blue dark:text-white'>
              Sign up
            </h5>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='firstname'
                  type='text'
                  placeholder='firstname'
                  label={'firstname'}
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='lastname'
                  type='text'
                  placeholder='lastname'
                  label={'lastname'}
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='username'
                  type='text'
                  placeholder='username'
                  label={'username'}
                />
              </Col>

              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='occupation'
                  type='text'
                  placeholder='occupation'
                  label={'occupation'}
                />
              </Col>

              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='email'
                  type='text'
                  placeholder='example@gmail.com'
                  label={'email'}
                />
              </Col>

              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='password'
                  type='password'
                  placeholder='...........'
                  label={'password'}
                />
              </Col>
            </Row>
            <div className='flex items-center'>
              <Link
                to='/'
                className=' text-md text-blue hover:underline dark:text-blue-500'
              >
                Login
              </Link>
            </div>
            {/* <div className='flex items-start'>
              <Link
                to='/forgot-password'
                className=' text-md text-blue hover:underline dark:text-blue-500'
              >
                Forgot Password?
              </Link>
            </div> */}
            {loader && (
              <div className='flex items-center h-5 justify-center'>
                <Spinner />
              </div>
            )}
            <div className='flex items-center justify-center'>
              {!loader && (
                <button
                  type='submit'
                  className='w-full h-[50px] bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  SIGN UP
                </button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
export default SignUp
