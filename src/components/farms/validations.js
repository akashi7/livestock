import * as Yup from "yup";
export const addFarmSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    farmerId: Yup.string().required("Farmer is Required"),
    others: Yup.string().required(" Other is Required"),
});