import { Col, Layout, Row, notification } from 'antd';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { farm } from '../../../state/slices/farm.slice';
import { getfarmers } from '../../../state/slices/farmer.slice';

import {
  allProvinces,
  getAllCells,
  getAllDistricts,
  getAllSectors,
  getAllVillages,
} from '../../../utils/services/Addressess';
import { InputSelect, InputText } from '../../common/input';
import { addFarmSchema } from '../validations';

function CreateFarms() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.farm);
  const { get } = useSelector((state) => state.farmer);

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

  function successFull() {
    notification.success({
      placement: 'topRight',
      message: 'Farm Added Successfully',
      duration: 3,
      key: 'success',
    });
    setTimeout(() => {
      navigate('/vt/list-farms');
    }, 3000);
  }

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
    values.province = activeProvince;
    values.district = activeDistrict;
    values.sector = activeSector;
    values.cell = activeCell;
    dispatch(farm({ data: values, success: successFull }));
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
                  value={activeProvince}
                  options={provinces}
                  label="Select Province"
                  onChange={(e) => setActiveProvince(e.target.value)}
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="district"
                  value={activeDistrict}
                  options={districts}
                  label="Select District"
                  onChange={(e) => setActiveDistrict(e.target.value)}
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
