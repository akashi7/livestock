import { Col, Layout, Row } from 'antd';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { farm } from '../../../state/slices/farm.slice';
import { getfarmers } from '../../../state/slices/farmer.slice';
import { InputSelect, InputText } from '../../common/input';
import { addFarmSchema } from '../validations';

function CreateFarms() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.farm);
  const { get } = useSelector((state) => state.farmer);
  const initialValues = {
    name: '',
    farmerId: '',
    province: '',
    district: '',
    cell: '',
    sector: '',
    village: '',
    others: '',
  };
  const handleSubmit = (values) => {
    dispatch(farm({ data: values, success: navigate('/vt/list-farms') }));
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
        label: item.firstname + ' ' + item.lastname,
      });
      return true;
    });
    console.log(get.data);
    setfarmers(array);
  }

  useEffect(() => {
    dispatch(getfarmers());
    /* eslint-disable-next-line */
  }, []);

  return (
    <Layout className="h-[100vh]  items-center flex">
      <div class="p-4 w-[60%] min-h-[530px] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={addFarmSchema}
          onSubmit={handleSubmit}
        >
          <Form class="space-y-12" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">Add Farm</p>
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="name"
                  type="text"
                  placeholder="Farm name"
                  label="Name"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="farmerId"
                  options={farmers}
                  label="Select Farmer"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="province"
                  options={[{ label: 'North', value: 'north' }]}
                  label="Select Province"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="district"
                  options={[{ label: 'Musanze', value: 'musanze' }]}
                  label="Select District"
                />
              </Col>

              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="sector"
                  options={[{ label: 'Muhoza', value: 'muhoza' }]}
                  label="Select Sector"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="cell"
                  options={[{ label: 'Muhoza', value: 'muhoza' }]}
                  label="Select Cell"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="village"
                  options={[{ label: 'Byimana', value: 'byimana' }]}
                  label="Select Village"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="others"
                  type="text"
                  placeholder="others"
                  label="Others"
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
export default CreateFarms;
