import { CascadeSelect, InputSelect, InputText } from "../../common/input";
import { Layout, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { addFarmerSchema } from "../validations";
import { Spinner } from "../../common/spinner";
import { addressOptions } from "../../../utils/address";

function CreateFarmer() {
    const navigate = useNavigate();
    const initialValues = {
        firstname: "",
        lastname: "",
        phone: "",
        nid: "",
        gender: "",
        farmer_cat: "",
        province: "",
        district: "",
        cell: "",
        sector: "",
        village: "",
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
                                        { label: "Male", value: "Male" },
                                        { label: "Female", value: "Female" },
                                    ]}
                                />
                            </Col>
                            <Col className="gutter-row mt-10" span={12}>
                            <InputText
                                    name="farmer_cat"
                                    type="text"
                                    placeholder="Farmer Cat"
                                />
                            </Col>
                            <Col className="gutter-row mt-10" span={12}>
                                <InputSelect
                                    name="province"
                                    options={[
                                        { label: "North", value: "north" },
                                    ]}
                                    onChange={handleAddress}
                                    label="Select Province"
                                />
                            </Col>
                            <Col className="gutter-row mt-10" span={12}>
                            <InputSelect
                                    name="district"
                                    options={[
                                        { label: "Musanze", value: "musanze" },
                                    ]}
                                    onChange={handleAddress}
                                    label="Select District"
                                />
                            </Col>
                            
                            <Col className="gutter-row mt-10" span={12}>
                            <InputSelect
                                    name="sector"
                                    options={[
                                        { label: "Muhoza", value: "muhoza" },
                                    ]}
                                    onChange={handleAddress}
                                    label="Select Sector"
                                />
                            </Col>
                            <Col className="gutter-row mt-10" span={12}>
                            <InputSelect
                                    name="cell"
                                    options={[
                                        { label: "Muhoza", value: "muhoza" },
                                    ]}
                                    onChange={handleAddress}
                                    label="Select Cell"
                                />
                            </Col>
                            <Col className="gutter-row mt-10" span={12}>
                            <InputSelect
                                    name="village"
                                    options={[
                                        { label: "Byimana", value: "byimana" },
                                    ]}
                                    onChange={handleAddress}
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
export default CreateFarmer;
