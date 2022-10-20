import * as Yup from "yup";

export const createEventSchema = Yup.object().shape({
  title: Yup.string().required("title is Required"),
  start: Yup.string().required("start date is Required"),
  end: Yup.string().required("end date is Required"),
});
