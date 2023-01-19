import * as Yup from "yup";

export const createEventSchema = Yup.object().shape({
  title: Yup.string().required("title is Required"),
  description: Yup.string().required("description is Required"),
  start_time: Yup.string().required("start date is Required"),
  end_time: Yup.string().required("end date is Required"),
});
