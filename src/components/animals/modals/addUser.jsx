import { Col, Modal, Row, notification } from 'antd'
import { Form, Formik } from 'formik'
import { InputSelect, InputText } from '../../common/input'

export default function AddUserModal({
  Toogle,
  toogle,
  dispatch,
  action,
  state,
  farmId,
  getAllUsers,
}) {
  const initialValues = {
    email: '',
    password: '',
    occupation: 0,
    firstname: '',
    lastname: '',
    username: '',
    role: '',
  }

  const Success = () => {
    dispatch(getAllUsers({ farmId }))
    notification.success({
      placement: 'topRight',
      message: 'User Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  const handleSubmit = (values) => {
    console.log({ values })
    dispatch(action({ farmId, data: values, success: Success }))
  }

  const roles = ['admin', 'user']

  return (
    <Modal
      title='Add User'
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
          // validationSchema={userSignUpSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
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
                <InputSelect
                  name='role'
                  options={roles.map((role) => ({
                    label: role,
                    value: role,
                  }))}
                  label='role'
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
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {state.loading ? 'loading' : 'submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
