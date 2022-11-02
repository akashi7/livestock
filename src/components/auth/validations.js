import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail is Required")
    .email("email is not valid"),
  password: Yup.string().required("Password is Required"),
});
