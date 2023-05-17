import * as http from './api'
export const createAnimal = (data) => {
  return http.POST('animal/create', data)
}
export const editAnimal = (id, data) => {
  return http.PUT(`animal/${id} `, data)
}
export const createGroupAnimal = (data) => {
  return http.POST('livestock_groups/create', data)
}
export const createSickBay = (resName, id, data) => {
  return http.POST(`sickbay/${resName}/${id}/create`, data)
}
export const getAnimalsSickbayData = (id) => {
  return http.GET(`sickbay/animal/${id}/check/all`)
}
export const getAnimalsGroupData = () => {
  return http.GET('livestock_groups/check/all')
}
export const getAnimalsData = () => {
  return http.GET('animal/check/all')
}
export const getAnimalsCatData = () => {
  return http.GET('animalcategory/check/all')
}
export const getPurposeData = () => {
  return http.GET('purposelist/check/all')
}

export const createFeedData = (ResName, id, data) => {
  console.log({ ResName, id, data })
  return http.POST(`feeding/${ResName}/${id}/create`, data)
}
export const getFeedData = (id, type) => {
  return http.GET(`feeding/${type}/${id}/check/all`)
}

export const getFeedIdsData = () => {
  return http.GET('feed/check/all')
}
export const createCategoryData = (data) => {
  return http.GET('animalcategory/create', data)
}

export const vaccinationData = () => {
  return http.GET('vaccination/check/all')
}

export const Vaccinate = (resName, id, data) => {
  return http.POST(`vaccinating/${resName}/${id}/create `, data)
}

export const listVaccination = (id) => {
  return http.GET(`vaccinating/animal/${id}/check/all`)
}

export const animalReport = () => {
  return http.GET('reports/animal-farm-farmer')
}

export const viewOneAnimal = (params) => {
  return http.GET(`animal/${params}`)
}

export const getMedecines = () => {
  return http.GET(`medicine/check/all`)
}

export const listTreatment = (id) => {
  return http.GET(`treatment/animal/${id}/check/all`)
}

export const createTreatment = (resName, id, data) => {
  return http.POST(`treatment/${resName}/${id}/create`, data)
}

export const createAccounting = (id, data) => {
  return http.POST(`accounting/animal/${id}/create`, data)
}

export const listAccounting = (id) => {
  return http.GET(`accounting/animal/${id}/check/all`)
}

export const createMeasurement = (id, data) => {
  return http.POST(`measurement/${id}/create`, data)
}
export const getMeasurements = (id) => {
  return http.GET(`measurement/${id}/check/all`)
}

export const allAnimalActivities = (id) => {
  return http.GET(`activities/animal/${id}/check/all`)
}

export const createAnimalNote = (resName, id, data) => {
  return http.POST(`notes/${resName}/${id}/create`, data)
}

export const retrieveAnimalNotes = (id) => {
  return http.GET(`notes/animal/${id}/check/all`)
}

export const getOneAnimalNote = (resName, resId, id) => {
  return http.GET(`notes/${resName}/${resId}/${id} `)
}

export const createAnimalYield = (id, data) => {
  return http.POST(`yield/animal/${id}/create`, data)
}

export const ListAnimalYield = (id) => {
  return http.GET(`yield/animal/${id}/check/all`)
}

export const createAnimalBreed = (id, data) => {
  return http.POST(`breeding/animal/${id}/create`, data)
}

export const ListAnimalBreed = (id) => {
  return http.GET(`breeding/animal/${id}/check/all`)
}

export const SearchAnimalGroup = (param) => {
  return http.GET(`animal?name=${param.name}`)
}

export const AddAnimalToGroup = (groupId, animalId) => {
  return http.PUT(`animal/${animalId}/${groupId}`)
}

export const viewGroupAnimal = (groupId) => {
  return http.GET(`livestock_groups/${groupId}`)
}
export const GetTreatmentReport = () => {
  return http.GET(
    `reports/livestock/treatments?startDate=2022-04-04&endDate=2023-04-04`
  )
}

export const upComingTreatmentReport = () => {
  return http.GET(
    `reports/livestock/upcoming_treatments?startDate=2022-04-04&endDate=2023-04-04`
  )
}
export const GetreportTypes = () => {
  return http.GET(`reports/types`)
}

export const GetContactApi = () => {
  return http.GET(`contact/check/all`)
}

export const AddAncestors = (gender, parent, data) => {
  return http.POST(`animal/new?gender=${gender}&parent_of=${parent}`, data)
}

export const AnimalOffSpring = (id) => {
  return http.GET(`animal/${id}/offstring`)
}
export const GetAllMales = (id) => {
  return http.GET(`animal/males/all`)
}
export const GetAllFemales = (id) => {
  return http.GET(`animal/females/all`)
}
export const GetAllAncestors = (id) => {
  return http.GET(`animal/${id}/ancestory`)
}

export const searchAnimal = (name) => {
  return http.PUT(`animal/search/animals/?name=${name.name}`)
}

//animal/c9149370-8420-492c-948e-18b353a7b75a/offstring
