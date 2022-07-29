import * as Yup from "yup";
export const addFarmerExpenses = Yup.object().shape({
  creationDate: Yup.string().required('Creation date is required'),
  item_name: Yup.string().required('Item is required'),
  price: Yup.string().required("Category id is Required"),
  quantity: Yup.string().required("Quantity is Required"),
  farmId: Yup.string().required("Farm id is Required"),
});

