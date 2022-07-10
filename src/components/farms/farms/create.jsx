import { InputSelect, InputText } from "../../common/input";
import { Layout, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {addFarmSchema } from "../validations";
import { Spinner } from "../../common/spinner";

function CreateFarms() {
    const navigate = useNavigate();
    const initialValues = {
        name: "",
        farmerId: "",
        province: "",
        district: "",
        cell: "",
        sector: "",
        village: "",
        others: "",
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
            <div class="p-4 w-[60%] min-h-[530px] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                                    options={[
                                        { label: "James", value: "1" },
                                        { label: "Mucyo", value: "2" },
                                    ]}
                                    onChange={handleAddress}
                                    label="Select Farmer"
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
export default CreateFarms;
