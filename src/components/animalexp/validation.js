import * as Yup from "yup";
export const addAnimalExpenses = Yup.object().shape({
  creationDate: Yup.string().required('Creation date is required'),
  animalId: Yup.string().required('Animal id is required'),
  categoryId: Yup.string().required("Category id is Required"),
  itemId: Yup.string().required("Item id is Required"),
  quantity: Yup.string().required("Quantity is Required")
});

