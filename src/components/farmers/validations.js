import * as Yup from "yup";
export const addFarmerSchema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is Required"),
    lastname: Yup.string().required("Lastname  is Required"),
    phone: Yup.string().required("Phone is Required"),
    nid: Yup.string().required("National ID is Required"),
    gender: Yup.string().required("Gender is Required"),
    farmer_cat: Yup.string().required("Farmer_Cat is Required"),
    province: Yup.string().required("Province  is Required"),
    district: Yup.string().required("District is Required"),
    sector: Yup.string().required("Sector is Required"),
    cell: Yup.string().required("Cell is Required"),
    village: Yup.string().required("Village Email is Required"),
});