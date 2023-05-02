import { Col, Modal, notification, Row } from 'antd'
import { Form, Formik } from 'formik'
import { InputSelect, InputText } from '../../common/input'
import { AddFeedSchema } from '../validations'
import { useState } from 'react'

export default function AddFeedModal({
  Toogle,
  toogle,
  CreateFeed,
  createFeed,
  dispatch,
  feed,
  categories,
  id,
  getAllFeeds,
}) {
  const initialValues = {
    onsetDate: '',
    // animalCategoryId: "",
    quantity: '',
    feedId: '',
  }

  function navigates() {
    dispatch(getAllFeeds({ params: id }))
    notification.success({
      placement: 'topRight',
      message: 'Animal Feed Added Successfully',
      duration: 3,
      key: 'success',
    })
    Toogle(false)
  }

  function handleSubmit(values) {
    values.per_head = state.value
    dispatch(
      CreateFeed({ resName: 'animal', id, data: values, success: navigates })
    )
  }

  const [state, setState] = useState({
    value: 'false',
  })

  function ChangeType(e) {
    setState({ ...state, value: e.target.value })
  }

  return (
    <Modal
      title='Add Feed'
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
          validationSchema={AddFeedSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-12' action='#'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {/* <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='per_head'
                  options={[
                    { label: 'Per Head', value: true },
                    { label: 'Total for group', value: false },
                  ]}
                  label='Group distribution'
                />
              </Col> */}

              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='onsetDate'
                  type='date'
                  placeholder='OnsetDate'
                  label='OnsetDate'
                />
              </Col>
              <Col className='gutter-row mt-10' span={12}>
                <InputText
                  name='quantity'
                  type='text'
                  placeholder='quantity'
                  label='Quantity'
                />
              </Col>

              <Col className='gutter-row mt-10' span={12}>
                <InputSelect
                  name='feedId'
                  options={feed?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label='Select Feed type'
                />
              </Col>
              <div className='mt-10 ml-2'>
                <div className='kkpoer'>
                  <span className='span'>distribution</span>
                  <div className='flex  flex-row  w-[100%]'>
                    <div className=' flex flex-row justify-start m-[5px] items-center'>
                      <input
                        type={'radio'}
                        className='w-[70%]'
                        value={'true'}
                        onChange={ChangeType}
                        checked={state.value === 'true'}
                      />
                      <label className='w-[170px] '>Per Head</label>
                    </div>
                    <div className=' flex flex-row justify-start m-[5px] items-center  '>
                      <input
                        type={'radio'}
                        className='w-[70%]'
                        value={'false'}
                        checked={state.value === 'false'}
                        onChange={ChangeType}
                      />
                      <label className='w-[170px] '>Total for group</label>
                    </div>
                  </div>
                </div>
              </div>
            </Row>

            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {createFeed.loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}
