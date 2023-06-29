import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail is Required")
    .email("email is not valid"),
  password: Yup.string().required("Password is Required"),
});
export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail is Required")
    .email("email is not valid"),
  password: Yup.string().required("Password is Required"),
  firstname: Yup.string().required("firstname is Required"),
  lastname: Yup.string().required("lastname is Required"),
  occupation: Yup.number().required("occupation is Required"),
  role:Yup.string().required('Role is required')
 
});

export const newSignUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail is Required")
    .email("email is not valid"),
  password: Yup.string().required("Password is Required"),
  firstname: Yup.string().required("firstname is Required"),
  lastname: Yup.string().required("lastname is Required"),
  occupation: Yup.number().required("occupation is Required"), 
  username: Yup.string().required("username is Required"), 
});
