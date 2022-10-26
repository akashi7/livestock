import { Col, Layout, notification, Row } from "antd";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  animal,
  getAnimalCatgories,
  VaccinationData,
  VaccinateAnimal,
} from "../../../state/slices/animal.slice";
import { InputSelect, InputText } from "../../common/input";
import { vaccinationSchema } from "../validations";

function VacinateAnimal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { animalsGroupData, vacciData, vatinate } = useSelector(
    (state) => state.animal
  );

  const initialValues = {
    onsetDate: "",
    description: "",
    vaccinationId: "",
    groupAnimalId: "",
    quantity: "",
    nextAppointment: "",
  };

  useEffect(() => {
    dispatch(getAnimalCatgories());
    dispatch(VaccinationData());
    /* eslint-disable-next-line */
  }, []);

  function navigates() {
    notification.success({
      placement: "topRight",
      message: "Animal vaccination Added Successfully",
      duration: 3,
      key: "success",
    });
    setTimeout(() => {
      navigate("/vt/list-vaccination");
    }, 3000);
  }

  const handleSubmit = (values) => {
    dispatch(VaccinateAnimal({ data: values, success: navigates }));
  };
  return (
    <Layout className="h-[100vh]  items-center flex">
      <div className="p-4 w-[60%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={vaccinationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-12" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">Vaccinated Animal</p>
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="onsetDate"
                  type="date"
                  placeholder="onsetDate"
                  label="onset Date"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="groupAnimalId"
                  options={animalsGroupData?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label="Select Group Animal"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="description"
                  type="text"
                  placeholder="description"
                  label="description"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="nextAppointment"
                  type="date"
                  placeholder="nextAppointment"
                  label="next Appointment"
                />
              </Col>
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="quantity"
                  type="text"
                  placeholder="quantity"
                  label="Quantity"
                />
              </Col>

              <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="vaccinationId"
                  options={vacciData?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label="Select vaccination Id"
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
                {vatinate.loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
export default VacinateAnimal;
