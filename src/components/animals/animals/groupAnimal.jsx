import { Col, Layout, notification, Row } from 'antd';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addAnimalGroup,
  getAllPurposeData,
  getAnimalCatgories,
} from '../../../state/slices/animal.slice';
import { getAllFarms } from '../../../state/slices/farm.slice';
import { InputSelect, InputText } from '../../common/input';
import { addAnimalGroupSchema } from '../validations';

function CreateGroupAnimal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.animal.createAnimalGroup);
  const { get } = useSelector((state) => state.farm);
  const animalCatgories = useSelector((state) => state.animal.categories);
  const puporseData = useSelector((state) => state.animal.purposeData);
  const initialValues = {
    farmId: '',
    birthdate: '',
    parent: '',
    expected_exit: '',
    animalCategoryId: '',
    purposeId: '',
    name: '',
    number: '',
    femaleNumber: '',
    birthkgs: '',
  };
  const [farmers, setfarmers] = useState([]);

  useEffect(() => {
    setFarmers();
    /* eslint-disable-next-line */
  }, [get.data]);
  useEffect(() => {
    dispatch(getAllFarms());
    dispatch(getAllPurposeData());
    dispatch(getAnimalCatgories());
    /* eslint-disable-next-line */
  }, []);
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

  function navigates() {
    notification.success({
      placement: 'topRight',
      message: 'Group Animal Added Successfully',
      duration: 3,
      key: 'success',
    });
    setTimeout(() => {
      navigate('/vt/list-animalsGroup');
    }, 3000);
  }

  const handleSubmit = (values) => {
    dispatch(addAnimalGroup({ data: values, success: navigates }));
  };
  return (
    <Layout className="h-[100vh]  items-center flex">
      <div className="p-4 w-[60%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={addAnimalGroupSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-12" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">Add Animal Group</p>
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="farmId"
                  options={farmers}
                  label="Select Farm"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="animalCategoryId"
                  options={animalCatgories?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label="Select Animal Category"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="name"
                  type="text"
                  placeholder="name"
                  label="Name"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="purposeId"
                  options={puporseData?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label="Select Purpose"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="number"
                  type="text"
                  placeholder="number"
                  label="Number"
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
                  name="femaleNumber"
                  type="text"
                  placeholder="female number"
                  label="Female Number"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="maleNumber"
                  type="text"
                  placeholder="male number"
                  label="Male Number"
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
                  type="text"
                  placeholder="expected_exit"
                  label="expected_exit"
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
export default CreateGroupAnimal;
