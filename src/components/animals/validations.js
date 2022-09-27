import * as Yup from "yup";
export const addFarmerSchema = Yup.object().shape({
    farmId: Yup.string().required("Farmer is Required"),
    earring_num: Yup.string().required("Ear ring_number is Required"),
    sex: Yup.string().required("Gender is Required"),
    animalCategoryId: Yup.string().required("Animal_cat is Required"),
    purposeId: Yup.string().required("Purpose is Required"),
    birthdate: Yup.string().required("Birthdate is Required"),
    birthkgs: Yup.string().required("Birthkgs is Required"),
    parent: Yup.string().required("Parent is Required"),
    expected_exit: Yup.string().required("expected exit is Required"),
    expected_exit_kgs: Yup.string().required("expected_exit_kgs is Required"),
});
export const addAnimalGroupSchema = Yup.object().shape({
    farmId: Yup.string().required("Farmer is Required"),
    name: Yup.string().required("Name is Required"),
    number: Yup.string().required("Number is Required"),
    animalCategoryId: Yup.string().required("Animal_cat is Required"),
    purposeId: Yup.string().required("Purpose is Required"),
    birthdate: Yup.string().required("Birthdate is Required"),
    femaleNumber: Yup.string().required("FemaleNumber is Required"),
    maleNumber: Yup.string().required("FemaleNumber is Required"),
    parent: Yup.string().required("Parent is Required"),
    expected_exit: Yup.string().required("expected exit is Required"),
});
export const addAnimalSickSchema = Yup.object().shape({
    onsetDate: Yup.string().required("Date is Required"),
    animalId: Yup.string().required("Animal is Required"),
    animalCategoryId: Yup.string().required("Animal Category is Required"),
    groupAnimalId: Yup.string().required("Group Animal is Required"),
    intervention: Yup.string().required("Intervation is Required"),
    observation: Yup.string().required("Observation is Required"),
    quantity: Yup.string().required("Quantity is Required"),
    medicineId: Yup.string().required("Medecine is Required"),
});

export const AddAnimalCategorySchmea = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    shortcode: Yup.string().required("Shortcode is Required"),
});

export const AddFeedSchema = Yup.object().shape({
    onsetDate: Yup.string().required("onsetDate is Required"),
    animalId: Yup.string().required("animalId is Required"),
    animalCategoryId: Yup.string().required("animalCategoryId is Required"),
    groupAnimalId: Yup.string().required("groupAnimalId is Required"),
    quantity: Yup.string().required("quantity is Required"),
    feedId: Yup.string().required("feedId is Required"),
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