import * as Yup from "yup";
export const addFarmSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    farmerId: Yup.string().required("Farmer is Required"),
    province: Yup.string().required("Province  is Required"),
    district: Yup.string().required("District is Required"),
    sector: Yup.string().required("Sector is Required"),
    cell: Yup.string().required("Cell is Required"),
    village: Yup.string().required("Village Email is Required"),
    others: Yup.string().required(" Other is Required"),
});