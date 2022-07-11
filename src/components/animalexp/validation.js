import * as Yup from "yup";
export const addAnimalExpenses = Yup.object().shape({
  creationDate: Yup.string().required('Names is required'),
  animalId: Yup.string().required('Code/Tin is required'),
  categoryId: Yup.string().required("E-mail is Required"),
  itemId: Yup.string().required("Address is Required"),
  quantity: Yup.string().required("Person is Required")
});

