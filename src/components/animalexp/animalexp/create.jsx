import { Col, Layout, Row } from 'antd';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { InputSelect, InputText } from '../../common/input';
import { addAnimalExpenses } from '../validation';
import { useDispatch, useSelector } from 'react-redux';
import { animalExpense } from '../../../state/slices/animalExp.slice';
import { getAnimals } from '../../../state/slices/animal.slice';
import { useEffect, useState } from 'react';
import { getItems } from '../../../state/slices/animalExp.slice';
import { getCategories } from '../../../state/slices/animalExp.slice';

export default function AnimalExpenses() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, items, catg } = useSelector((state) => state.animalExpenses);
  const { get } = useSelector((state) => state.animal);
  const [animals, setAnimals] = useState([]);
  const [category, setCategory] = useState([]);
  const [item, setItem] = useState([]);
  const initialValues = {
    creationDate: '',
    animalId: '',
    categoryId: '',
    itemId: '',
    quantity: '',
  };
  const handleSubmit = (values) => {
    dispatch(
      animalExpense({
        data: values,
        success: () => navigate('/vt/list-animal-expenses'),
      }),
    );
  };

  function getAnimal() {
    let array = [];
    get.data.map((item) => {
      array.push({
        value: item.id,
        label: item.earring_num,
      });
      return true;
    });
    setAnimals(array);
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
    dispatch(getAnimals());
    dispatch(getItems());
    dispatch(getCategories());
    /* eslint-disable-next-line */
  }, []);
  useEffect(() => {
    getAnimal();
    /* eslint-disable-next-line */
  }, [get.data]);
  useEffect(() => {
    getItem();
    /* eslint-disable-next-line */
  }, [items.data]);

  useEffect(() => {
    getCategory();
    /* eslint-disable-next-line */
  }, [catg.data]);

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
                  options={animals}
                  label="Select animal id"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="categoryId"
                  options={category}
                  label="Select category id"
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
                  name="creationDate"
                  type="date"
                  placeholder="Creation Date"
                  label="Creation date"
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
                {loading ? 'Loading...' : 'Add'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
