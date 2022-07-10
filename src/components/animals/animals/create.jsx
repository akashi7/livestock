import { InputSelect, InputText } from "../../common/input";
import { Layout, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { addFarmerSchema } from "../validations";
import { Spinner } from "../../common/spinner";

function CreateAnimal() {
    const navigate = useNavigate();
    const initialValues = {
        farmId: "",
        earring_num: "",
        gender: "",
        animal_cat: "",
        birthdate: "",
        birthkgs: "",
        parent: "",
        expected_exit: "",
        expected_exit_kgs: "",
    };
    const handleSubmit = (values) => {
        console.log(values);
        navigate("/");
    };
    const handleAddress = (values) => {
        console.log(values);
        return (initialValues.address = values);
    };
    return (
        <Layout className="h-[100vh]  items-center flex">
            <div class="p-4 w-[60%] h-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <Formik
                    initialValues={initialValues}
                    validationSchema={addFarmerSchema}
                    onSubmit={handleSubmit}
                >
                    <Form class="space-y-12" action="#">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={24}>
                                <p className="text-blue">Add Animal</p>
                            </Col>
                            <Col className="gutter-row mt-10" span={12}>
                                <InputSelect
                                    name="farmerId"
                                    options={[
                                        { label: "James", value: "1" },
                                        { label: "Mucyo", value: "2" },
                                    ]}
                                    onChange={handleAddress}
                                    label="Select Farmer"
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
                                    name="gender"
                                    label="Gender"
                                    options={[
                                        { label: "Male", value: "Male" },
                                        { label: "Female", value: "Female" },
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
                                    type="date"
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
                                class="w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </Layout>
    );
}
export default CreateAnimal;
