import { Col, Layout, notification, Row } from "antd";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  animal,
  getAllPurposeData,
  getAnimalCatgories,
} from "../../../state/slices/animal.slice";
import { getAllFarms } from "../../../state/slices/farm.slice";
import { InputSelect, InputText } from "../../common/input";
import { BreedStatus, harvestUnits, onFeed, purchased } from "../data/data";
import { addFarmerSchema } from "../validations";

function CreateAnimal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.animal);
  const { get } = useSelector((state) => state.farm);
  const animalCatgories = useSelector((state) => state.animal.categories);
  const puporseData = useSelector((state) => state.animal.purposeData);

  const initialValues = {
    animalCategory_id: "",
    earring_num: "",
    farm_id: "",
    purpose_id: "",
    birth_date: "",
    birth_weight: 0,
    breed: "",
    breeding_status: "",
    coloring: "",
    condition_score: 0,
    description: "",
    harvest_label: "",
    harvest_unit: "",
    keywords: "",
    name: "",
    on_feed: false,
    purchase_price: 0,
    purchased: false,
    registry_number: "",
    retention_score: 0,
    status: "",
    tag_color: "",
    tag_number: "",
    type: "",
    weight: 0,
    height: 0,
    electronic_id: "",
  };
  const [farmers, setfarmers] = useState([]);
  const [gender, setGender] = useState("");

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
      placement: "topRight",
      message: "Animal Added Successfully",
      duration: 3,
      key: "success",
    });
    setTimeout(() => {
      navigate("/vt/list-animals");
    }, 3000);
  }

  const handleSubmit = (values) => {
    values.is_group = false;
    values.is_neutered = false;
    values.breeding_stock = false;
    values.gender = gender;
    dispatch(animal({ data: values, success: navigates }));
  };
  return (
    <Layout className="h-[100%] items-center flex overflow-auto">
      <div className="p-4 w-[80%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 mb-8 ">
        <Formik
          initialValues={initialValues}
          validationSchema={addFarmerSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-9" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">Add Animal</p>
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputSelect
                  name="farm_id"
                  options={farmers}
                  label="Select Farm"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputSelect
                  name="animalCategory_id"
                  options={animalCatgories?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label="Select Animal Category"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="earring_num"
                  type="text"
                  placeholder="earring_num"
                  label="Tin/Code"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputSelect
                  name="gender"
                  label="gender"
                  value={gender}
                  required
                  options={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                  ]}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputSelect
                  name="purpose_id"
                  options={puporseData?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label="Select Purpose"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="birth_date"
                  type="date"
                  placeholder="birth_date"
                  label="Birth date"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="birth_weight"
                  type="text"
                  placeholder="birth_weight"
                  label="birth_weight"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="breed"
                  type="text"
                  placeholder="breed"
                  label="Breed"
                />
              </Col>
              {gender && gender === "Female" ? (
                <Col className="gutter-row mt-10" span={6}>
                  <InputSelect
                    name="breeding_status"
                    label="breeding_status"
                    options={BreedStatus.map((breed) => {
                      return {
                        value: breed,
                        label: breed,
                      };
                    })}
                  />
                </Col>
              ) : null}
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="coloring"
                  type="text"
                  placeholder="coloring"
                  label="Coloring"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="condition_score"
                  type="text"
                  placeholder="condition_score"
                  label="Condition score"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="description"
                  type="text"
                  placeholder="description"
                  label="description"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="harvest_label"
                  type="text"
                  placeholder="harvest_label"
                  label="Harvest label"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputSelect
                  name="harvest_unit"
                  label="harvest_unit"
                  options={harvestUnits.map((harvest) => {
                    return {
                      value: harvest,
                      label: harvest,
                    };
                  })}
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputSelect
                  name="on_feed"
                  label="on_feed"
                  options={onFeed.map((feed) => {
                    return {
                      value: feed.value,
                      label: feed.label,
                    };
                  })}
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputSelect
                  name="purchased"
                  label="purchased"
                  options={purchased.map((feed) => {
                    return {
                      value: feed.value,
                      label: feed.label,
                    };
                  })}
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="keywords"
                  type="text"
                  placeholder="keywords"
                  label="keywords"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="name"
                  type="text"
                  placeholder="name"
                  label="name"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="purchase_price"
                  type="text"
                  placeholder="purchase_price"
                  label="purchase price"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="registry_number"
                  type="text"
                  placeholder="registry_number"
                  label="registry number"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="retention_score"
                  type="text"
                  placeholder="retention_score"
                  label="retention score"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="status"
                  type="text"
                  placeholder="status"
                  label="status"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="tag_color"
                  type="text"
                  placeholder="tag_color"
                  label="tag_color"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="tag_number"
                  type="text"
                  placeholder="tag_number"
                  label="tag_number"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="type"
                  type="text"
                  placeholder="type"
                  label="type"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="weight"
                  type="text"
                  placeholder="weight"
                  label="weight"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="height"
                  type="text"
                  placeholder="height"
                  label="height"
                />
              </Col>
              <Col className="gutter-row mt-10" span={6}>
                <InputText
                  name="electronic_id"
                  type="text"
                  placeholder="electronic_id"
                  label="electronic_id"
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
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
export default CreateAnimal;
