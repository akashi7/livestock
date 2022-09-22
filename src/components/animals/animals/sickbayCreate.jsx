import { Col, Layout, notification, Row } from 'antd';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createSickBy, getAllPurposeData, getAnimalCatgories, getAnimals } from '../../../state/slices/animal.slice';
import { InputSelect, InputText } from '../../common/input';
import { addAnimalGroupSchema, addAnimalSickSchema, addFarmerSchema } from '../validations';

function CreateAnimalSickBay() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.animal.createSickBy);
  const { get } = useSelector((state) => state.animal);
  const animalCatgories=useSelector((state)=>state.animal.categories);
  const initialValues = {
    onsetDate:"",
    animalId:1,
    animalCategoryId:"",
    groupAnimalId:1,
    intervention:"",
    observation:"",
    quantity:"",
    medicineId:1
  };
  useEffect(() => {
    dispatch(getAnimals());
    dispatch(getAllPurposeData());
    dispatch(getAnimalCatgories());
    /* eslint-disable-next-line */
  }, []);

  function navigates() {
    notification.success({
      placement: 'topRight',
      message: 'Sickbay Added Successfully',
      duration: 3,
      key: 'success',
    });
    setTimeout(() => {
      navigate('/vt/list-animals');
    }, 3000);
  }

  const handleSubmit = (values) => {
    dispatch(createSickBy({ data: values, success: navigates }));
  };
  return (
    <Layout className="h-[100vh]  items-center flex">
      <div className="p-4 w-[60%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={addAnimalSickSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-12" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">SickBy</p>
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="animal"
                  options={get?.data.map(item=>({"label":item.name,"value":item.id}))}
                  label="Select Animal"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="animalCategoryId"
                  options={animalCatgories?.data.map(item=>({"label":item.name,"value":item.id}))}
                  label="Select Animal Category"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="intervention"
                  type="text"
                  placeholder="Intervention"
                  label="Intervention"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="observation"
                  type="text"
                  placeholder="Observation"
                  label="Observation"
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
                  name="onsetDate"
                  type="date"
                  placeholder="onsetDate"
                  label="OnsetDate"
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
export default CreateAnimalSickBay;
