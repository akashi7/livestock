import * as Yup from "yup";
export const addFarmerSchema = Yup.object().shape({
    farmId: Yup.string().required("Farmer is Required"),
    earring_num: Yup.string().required("Ear ring_number is Required"),
    sex: Yup.string().required("Gender is Required"),
    animal_cat: Yup.string().required("animal_cat is Required"),
    birthdate: Yup.string().required("Birthdate is Required"),
    birthkgs: Yup.string().required("Birthkgs is Required"),
    parent: Yup.string().required("Parent is Required"),
    expected_exit: Yup.string().required("expected exit is Required"),
    expected_exit_kgs: Yup.string().required("expected_exit_kgs is Required"),
});

// {
//     "farmId": "1",
//     "earring_num": "99993344935",
//     "sex": "F",
//     "animal_cat": "pig",
//     "birthdate": "2021-03-03",
//     "birthkgs": "45",
//     "parent": "34542fg",
//     "expected_exit": "2021-04-04",
//     "expected_exit_kgs": "67"
// }