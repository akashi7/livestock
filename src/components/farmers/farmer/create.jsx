import { Col, Layout, notification, Row } from 'antd';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { farmer } from '../../../state/slices/farmer.slice';

import {
  allProvinces,
  getAllCells,
  getAllDistricts,
  getAllSectors,
  getAllVillages,
} from '../../../utils/services/Addressess';
import { InputSelect, InputText } from '../../common/input';
import { addFarmerSchema } from '../validations';

function CreateFarmer() {
  const { loading } = useSelector((state) => state.farmer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const successFull = () => {
    notification.success({
      placement: 'topRight',
      message: 'Farmer Added Successfully',
      duration: 3,
      key: 'success',
    });
    setTimeout(() => {
      navigate('/vt/');
    }, 3000);
  };

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [cells, setCells] = useState([]);
  const [villages, setVillages] = useState([]);
  const [activeProvince, setActiveProvince] = useState('');
  const [activeDistrict, setActiveDistrict] = useState('');
  const [activeSector, setActiveSector] = useState('');
  const [activeCell, setActiveCell] = useState('');

  useEffect(() => {
    allProvinces().then((resp) => setProvinces(resp));
  }, []);
  useEffect(() => {
    if (activeProvince) {
      getAllDistricts(activeProvince).then((resp) => setDistricts(resp));
      setSectors([]);
    }
  }, [activeProvince]);
  useEffect(() => {
    if (activeDistrict) {
      getAllSectors(activeProvince, activeDistrict).then((resp) =>
        setSectors(resp),
      );
    }
    /*eslint-disable-next-line */
  }, [activeDistrict]);
  useEffect(() => {
    if (activeSector) {
      getAllCells(activeProvince, activeDistrict, activeSector).then((resp) =>
        setCells(resp),
      );
    }
    /*eslint-disable-next-line */
  }, [activeSector]);
  useEffect(() => {
    if (activeCell) {
      getAllVillages(
        activeProvince,
        activeDistrict,
        activeSector,
        activeCell,
      ).then((resp) => setVillages(resp));
    }
    /*eslint-disable-next-line */
  }, [activeCell]);

  const initialValues = {
    firstname: '',
    lastname: '',
    phone: '',
    nid: '',
    gender: '',
    farmer_cat: '',
    province: '',
    district: '',
    cell: '',
    sector: '',
    village: '',
  };
  const handleSubmit = (values) => {
    values.province = activeProvince;
    values.district = activeDistrict;
    values.sector = activeSector;
    values.cell = activeCell;
    dispatch(farmer({ data: values, success: successFull }));
  };
  return (
    <Layout className="h-[100vh]  items-center flex">
      <div class="p-4 w-[60%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
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
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="nid"
                  type="text"
                  placeholder="National Identity"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="gender"
                  label="Gender"
                  options={[
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' },
                  ]}
                />
              </Col>
              <Col className="gutter-row mt-[60px]" span={12}>
                <InputText
                  name="farmer_cat"
                  type="text"
                  placeholder="Farmer Cat"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="province"
                  value={activeProvince}
                  onChange={(e) => setActiveProvince(e.target.value)}
                  label="Select Province"
                  options={provinces}
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="district"
                  value={activeDistrict}
                  label="Select District"
                  onChange={(e) => setActiveDistrict(e.target.value)}
                  options={districts}
                />
              </Col>

              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="sector"
                  value={activeSector}
                  label="Select Sector"
                  onChange={(e) => setActiveSector(e.target.value)}
                  options={sectors}
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="cell"
                  value={activeCell}
                  label="Select Cell"
                  onChange={(e) => setActiveCell(e.target.value)}
                  options={cells}
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="village"
                  options={villages}
                  label="Select Village"
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
                {loading ? 'Loading...' : 'Add Farmer'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
export default CreateFarmer;
