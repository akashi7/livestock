import { Col, Layout, Row } from 'antd';
import { Form, Formik } from 'formik';
import { InputText } from '../../common/input';
import { AddAnimalCategorySchmea } from '../validations';

export default function CreateCategory() {
  const initialValues = {
    name: '',
    shortcode: '',
  };
  function handleSubmit() {}

  return (
    <Layout className="h-[100vh]  items-center flex">
      <div className="p-4 w-[60%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={AddAnimalCategorySchmea}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-12" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">Add Category</p>
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="name"
                  type="text"
                  placeholder="Name"
                  label="Name"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="shortcode"
                  type="text"
                  placeholder="ShortCode"
                  label="ShortCode"
                />
              </Col>
            </Row>
            {/* <div className="flex items-center h-5 justify-center">
                            <Spinner />
                        </div> */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
