import * as Yup from "yup";
export const addFarmerSchema = Yup.object().shape({
    names: Yup.string().required('Names is required'),
    code: Yup.string().required('Code/Tin is required'),
    email: Yup.string().required("E-mail is Required").email('email is not valid'),
    address: Yup.string().required("Address is Required"),
    person: Yup.string().required("Person is Required"),
    person_title: Yup.string().required("Contact Person Title is Required"),
    person_email: Yup.string().required("Contact Person Email is Required"),
});