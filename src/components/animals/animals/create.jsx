import { Col, Layout, notification, Row } from 'antd';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { animal } from '../../../state/slices/animal.slice';
import { getAllFarms } from '../../../state/slices/farm.slice';
import { InputSelect, InputText } from '../../common/input';
import { addFarmerSchema } from '../validations';

function CreateAnimal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.animal);
  const { get } = useSelector((state) => state.farm);
  const initialValues = {
    farmId: '',
    earring_num: '',
    sex: '',
    animal_cat: '',
    birthdate: '',
    birthkgs: '',
    parent: '',
    expected_exit: '',
    expected_exit_kgs: '',
  };
  const [farmers, setfarmers] = useState([]);

  useEffect(() => {
    setFarmers();
    /* eslint-disable-next-line */
  }, [get.data]);

  function setFarmers() {
    let array = [];
    get.data.map((item) => {
      array.push({
        value: item.id,
        label: item.name,
      });
      return true;
    });
    setfarmers(array);
  }

  useEffect(() => {
    dispatch(getAllFarms());
    /* eslint-disable-next-line */
  }, []);

  function navigates() {
    notification.success({
      placement: 'topRight',
      message: 'Animal Added Successfully',
      duration: 3,
      key: 'success',
    });
    setTimeout(() => {
      navigate('/vt/list-animals');
    }, 3000);
  }

  const handleSubmit = (values) => {
    dispatch(animal({ data: values, success: navigates }));
  };
  return (
    <Layout className="h-[100vh]  items-center flex">
      <div className="p-4 w-[60%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={addFarmerSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-12" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">Add Animal</p>
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="farmId"
                  options={farmers}
                  label="Select Farm"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="earring_num"
                  type="text"
                  placeholder="earring_num"
                  label="Tin/Code"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="sex"
                  label="Sex"
                  options={[
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' },
                  ]}
                />
              </Col>

              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="animal_cat"
                  type="text"
                  placeholder="animal cat"
                  label="Animal Cat"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="birthdate"
                  type="date"
                  placeholder="Birthdate"
                  label="birthdate"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="birthkgs"
                  type="text"
                  placeholder="birthkgs"
                  label="Birth Kgs"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="parent"
                  type="text"
                  placeholder="parent"
                  label="Parent"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="expected_exit"
                  type="date"
                  placeholder="expected exit"
                  label="Expected Exit"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="expected_exit_kgs"
                  type="text"
                  placeholder="expected exit kgs"
                  label="Expected Exit Kgs"
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
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
export default CreateAnimal;
