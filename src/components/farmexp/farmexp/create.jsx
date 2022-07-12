import { Col, Layout, Row } from 'antd';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  farmExpense,
  getCategories,
  getItems,
} from '../../../state/slices/animalExp.slice';
import { getAllFarms } from '../../../state/slices/farm.slice';
import { InputSelect, InputText } from '../../common/input';
import { addFarmerExpenses } from '../validation';

export default function FarmExpense() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [item, setItem] = useState([]);
  const { get } = useSelector((state) => state.farm);
  const { catg, items } = useSelector((state) => state.animalExpenses);
  const initialValues = {
    creationDate: '',
    farmId: '',
    categoryId: '',
    itemId: '',
    quantity: '',
  };
  const [Farm, setFarm] = useState([]);
  const [changeCat, setChangeCat] = useState({});

  function getFarm() {
    let array = [];
    get.data.map((item) => {
      array.push({
        value: item.id,
        label: item.name,
      });
      return true;
    });
    setFarm(array);
  }
  function getItem() {
    let array = [];
    items.data.map((item) => {
      array.push({
        value: item.id,
        label: item.name,
      });
      return true;
    });
    setItem(array);
  }
  function getCategory() {
    let array = [];
    catg.data.map((item) => {
      array.push({
        value: item.id,
        label: item.name,
      });
      return true;
    });
    setCategory(array);
  }

  useEffect(() => {
    dispatch(getAllFarms());
    dispatch(getCategories());
    dispatch(getItems());
    /* eslint-disable-next-line */
  }, []);

  useEffect(() => {
    getFarm();
    /* eslint-disable-next-line */
  }, [get.data]);
  useEffect(() => {
    getCategory();
    /* eslint-disable-next-line */
  }, [catg.data]);
  useEffect(() => {
    getItem();
    /* eslint-disable-next-line */
  }, [items.data]);

  function onChange(val) {
    console.log(val.target.value);
    setChangeCat(val.target.value);
  }

  const handleSubmit = (values) => {
    values.categoryId = changeCat;
    // dispatch(
    //   farmExpense({
    //     data: values,
    //     success: () => {
    //       window.alert('Expenses added ok');
    //     },
    //   }),
    // );
  };

  return (
    <Layout className="h-[100vh]  items-center flex">
      <div className="p-4 w-[60%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={addFarmerExpenses}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-12" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">Add Farmer expenses</p>
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="farmId"
                  options={Farm}
                  label="Select farm id"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="categoryId"
                  options={category}
                  label="Select category id"
                  value={changeCat}
                  onChange={onChange}
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect name="itemId" options={item} label="Item id" />
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
                  name="item_name"
                  type="text"
                  placeholder="Item name"
                  label="Item name"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="creationDate"
                  type="date"
                  placeholder="Creation Date"
                  label="Creation date"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="price"
                  type="text"
                  placeholder="Price"
                  label="Price"
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
                {/* {loading ? 'Loading...' : 'Add'} */}Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
