import * as Yup from "yup";
export const addFarmerSchema = Yup.object().shape({
  animalCategory_id: Yup.string().required("animalCategory_id is Required"),
  earring_num: Yup.string().required("earring_num is Required"),
  farm_id: Yup.string().required("farm_id is Required"),
  purpose_id: Yup.string().required("purpose_id is Required"),
  birth_date: Yup.string().required("birth_date is Required"),
  birth_weight: Yup.string().required("birth_weight is Required"),
  breed: Yup.string().required("breed is Required"),
  breeding_status: Yup.string().required("breeding_status is Required"),
  coloring: Yup.string().required("coloring is Required"),
  condition_score: Yup.number().required("condition_score is Required"),
  description: Yup.string().required("description is Required"),
  // harvest_label: Yup.string().required("harvest_label is Required"),
  harvest_unit: Yup.string().required("harvest_unit is Required"),
  keywords: Yup.string().required("keywords is Required"),
  name: Yup.string().required("name is Required"),
  on_feed: Yup.boolean().required("on_feed is Required"),
  purchase_price: Yup.number().required("purchase_price is Required"),
  // purchased: Yup.boolean().required("purchased is Required"),
  retention_score: Yup.number().required("retention_score is Required"),
  status: Yup.string().required("status is Required"),
  // weight: Yup.number().required("weight is Required"),
  // height: Yup.number().required("height is Required"),
});
export const addAnimalGroupSchema = Yup.object().shape({
  farmId: Yup.string().required("Farmer is Required"),
  name: Yup.string().required("Name is Required"),
  number: Yup.string().required("Number is Required"),
  animalCategoryId: Yup.string().required("Animal_cat is Required"),
  purposeId: Yup.string().required("Purpose is Required"),
  birthdate: Yup.string().required("Birthdate is Required"),
  femaleNumber: Yup.string().required("FemaleNumber is Required"),
  maleNumber: Yup.string().required("MaleNumber is Required"),
  parent: Yup.string().required("Parent is Required"),
  expected_exit: Yup.string().required("expected exit is Required"),
});
export const addAnimalSickSchema = Yup.object().shape({
  onsetDate: Yup.string().required("Date is Required"),
  animalCategoryId: Yup.string().required("Animal Category is Required"),
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
  // animalCategoryId: Yup.string().required("animalCategoryId is Required"),
  quantity: Yup.string().required("quantity is Required"),
  feedId: Yup.string().required("feedId is Required"),
});

export const AddAccountSchema = Yup.object().shape({
  // type: Yup.string().required("type is Required"),
    amount: Yup.number().required("amount is Required and a number"),
    date: Yup.string().required("date is Required"),
    // vendor: Yup.string().required("vendor is Required"),
    category: Yup.string().required("category is Required"),
    check_number: Yup.string().required("check_number is Required"),
    keywords: Yup.string().required("keywords is Required"),
    description: Yup.string().required("description is Required"),
});

export const AddYieldSchema = Yup.object().shape({
   qty: Yup.string().required("Quantity is Required"),
    date: Yup.string().required("date is Required"),
    batch_number: Yup.string().required("batch_number is Required"),
    trace_number: Yup.string().required("trace_number is Required"),
    grade: Yup.string().required("grade is Required"),
    Price: Yup.string().required("Price is Required"),
    description: Yup.string().required("description is Required"),
})

export const AddBreedSchema = Yup.object().shape({
   update_animal_status: Yup.string().required("animal is Required"),
   date: Yup.string().required("date is Required"),
   breeding_method: Yup.string().required("breeding_method is Required"),
   technicial: Yup.string().required("technicial is Required"),
   amount: Yup.string().required("amount is Required"),
   cost: Yup.string().required("cost is Required"),
   unit: Yup.string().required("unit is Required"),
   description: Yup.string().required("description is Required"),
})


export const AddNotesSchema = Yup.object().shape({
  date: Yup.string().required("Date is Required"),
  description: Yup.string().required("description is Required"),
  category: Yup.string().required("category is Required"),
  keywords: Yup.string().required("keyword is Required"),

});

export const AddGroupSchema = Yup.object().shape({
  name: Yup.string().required("name is Required"),
  description: Yup.string().required("description is Required"),
  farm_id: Yup.string().required("farm id is Required"),
});


export const createEventSchema = Yup.object().shape({
  title: Yup.string().required("title is Required"),
  description: Yup.string().required("description is Required"),
  start_time: Yup.string().required("start date is Required"),
  end_time: Yup.string().required("end date is Required"),
});

export const AddMeasuremtSchema = Yup.object().shape({
  date: Yup.string().required("date is Required"),
  height: Yup.string().required("height is Required"),
  weight: Yup.string().required("weight is Required"),
});

export const AddTreatSchema = Yup.object().shape({
  amount: Yup.string().required("amount is Required"),
  batch: Yup.string().required("batch is Required"),
  cost: Yup.string().required("cost is Required"),
  date: Yup.string().required("date is Required"),
  description: Yup.string().required("description is Required"),
  keywords: Yup.string().required("keywords is Required"),
  mode: Yup.string().required("mode is Required"),
  product: Yup.string().required("product is Required"),
  retreat_date: Yup.string().required("retreat_date is Required"),
  site: Yup.string().required("site is Required"),
  technician: Yup.string().required("technician is Required"),
  type: Yup.string().required("type is Required"),
  withdrawal_date: Yup.string().required("withdrawal_date is Required"),
});

export const vaccinationSchema = Yup.object().shape({
  onsetDate: Yup.string().required("onsetDate is Required"),
  description: Yup.string().required("description is Required"),
  vaccinationId: Yup.string().required("vaccinationId is Required"),
  quantity: Yup.string().required("quantity is Required"),
  nextAppointment: Yup.string().required("nextAppointment is Required"),
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
