import { Col, Layout, Row } from 'antd';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { InputSelect, InputText } from '../../common/input';
import { addAnimalExpenses } from '../validation';

export default function AnimalExpenses() {
  const navigate = useNavigate();
  const initialValues = {
    creationDate: '',
    animalId: '',
    categoryId: '',
    itemId: '',
    quantity: '',
  };
  const handleSubmit = (values) => {
    console.log(values);
    navigate('/');
  };

  return (
    <Layout className="h-[100vh]  items-center flex">
      <div className="p-4 w-[60%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={addAnimalExpenses}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-12" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">Add animal expenses</p>
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="animalId"
                  // options={farmers}
                  options={[
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' },
                  ]}
                  label="Select Animal"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="categoryId"
                  type="text"
                  placeholder="Category id"
                  label="Category id"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="itemId"
                  type="text"
                  placeholder="Item id"
                  label="Item id"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="quantity"
                  type="text"
                  placeholder="Quantity"
                  label="Quantity"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="creationDate"
                  type="date"
                  placeholder="Creation Date"
                  label="Creationi date"
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
