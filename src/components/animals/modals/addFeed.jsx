import { Col, Modal, notification, Row } from "antd";
import { Form, Formik } from "formik";
import { InputSelect, InputText } from "../../common/input";
import { AddFeedSchema } from "../validations";

export default function AddFeedModal({
  Toogle,
  toogle,
  CreateFeed,
  createFeed,
  dispatch,
  feed,
  categories,
  id,
  getAllFeeds,
}) {
  const initialValues = {
    onsetDate: "",
    // animalCategoryId: "",
    quantity: "",
    feedId: "",
  };

  function navigates() {
    dispatch(getAllFeeds({ params: id }));
    notification.success({
      placement: "topRight",
      message: "Animal Feed Added Successfully",
      duration: 3,
      key: "success",
    });
    Toogle(false);
  }

  function handleSubmit(values) {
    dispatch(
      CreateFeed({ resName: "animal", id, data: values, success: navigates })
    );
  }

  return (
    <Modal
      title="Add Feed"
      centered
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={800}
      footer={null}
    >
      <div className="p-4 w-[100%] h-auto bg-white sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={AddFeedSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-12" action="#">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <p className="text-blue">Add Animal Feed</p>
              </Col>
              {/* <Col className="gutter-row mt-10" span={12}>
                <InputSelect
                  name="animalCategoryId"
                  options={categories?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label="Select Animal Category"
                />
              </Col> */}
              <Col className="gutter-row mt-10" span={12}>
                <InputText
                  name="onsetDate"
                  type="date"
                  placeholder="OnsetDate"
                  label="OnsetDate"
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
                  name="feedId"
                  options={feed?.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  label="Select Feed type"
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
                {createFeed.loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
}
