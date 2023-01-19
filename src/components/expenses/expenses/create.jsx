import { Col, Layout, Row } from 'antd';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { addressOptions } from '../../../utils/address';
import { CascadeSelect, InputText } from '../../common/input';
import { addFarmerSchema } from '../validations';

function CreateExpense() {
  const navigate = useNavigate();
  const initialValues = {
    names: '',
    code: '',
    email: '',
    address: '',
    person: '',
    person_title: '',
    person_email: '',
  };
  const handleSubmit = (values) => {
    console.log(values);
    navigate('/');
  };
  const handleAddress = (values) => {
    console.log(values);
    return (initialValues.address = values);
  };
  return (
    <Layout className="h-[100vh]  items-center flex">
      <div class="p-4 w-[60%] min-h-[530px] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={addFarmerSchema}
          onSubmit={handleSubmit}
        >
          <Form class="space-y-12" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">Add Farmer</p>
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="names"
                  type="text"
                  placeholder="clinic names"
                  label="Names"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="code"
                  type="text"
                  placeholder="clinc code"
                  label="Tin/Code"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="email"
                  type="text"
                  placeholder="clinic work email"
                  label="Work E-mail"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <CascadeSelect
                  name="address"
                  value={initialValues.address}
                  onChange={handleAddress}
                  label="Clinic Address"
                  options={addressOptions}
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="person"
                  type="text"
                  placeholder="contact person names"
                  label="Contact Person"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="person_title"
                  type="text"
                  placeholder="contact title"
                  label="Contact Title"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="person_email"
                  type="text"
                  placeholder="contact person email"
                  label="Contact Person E-mail"
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
export default CreateExpense;
