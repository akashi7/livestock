import * as http from './api'
export const createAnimal = (fId, data) => {
  return http.POST(`animal/${fId}/create`, data)
}
export const editAnimal = (fId, id, data) => {
  return http.PUT(`animal/${id} `, data)
}
export const createGroupAnimal = (fId, data) => {
  return http.POST(`livestock_groups/${fId}/create`, data)
}
export const createSickBay = (fId, resName, id, data) => {
  return http.POST(`sickbay/${fId}/${resName}/${id}/create`, data)
}
export const getAnimalsSickbayData = (fId, id, type) => {
  return http.GET(`sickbay/${fId}/${type}/${id}/check/all`)
}
export const getAnimalsGroupData = (fId) => {
  return http.GET(`livestock_groups/${fId}/check/all`)
}
export const getAnimalsData = (fId, id) => {
  return http.GET(`animal/${fId}/check/all`)
}
export const getAnimalsCatData = (fId) => {
  return http.GET('animalcategory/check/all')
}
export const getPurposeData = (fId) => {
  return http.GET('purposelist/check/all')
}

export const createFeedData = (fId, ResName, id, data) => {
  return http.POST(`feeding/${fId}/${ResName}/${id}/create`, data)
}
export const getFeedData = (fId, id, type) => {
  return http.GET(`feeding/${fId}/${type}/${id}/check/all`)
}

export const getFeedIdsData = (fId) => {
  return http.GET(`feed/${fId}/check/all`)
}
export const createCategoryData = (fId, data) => {
  return http.GET(`animalcategory/${fId}/create`, data)
}

export const vaccinationData = (fId) => {
  return http.GET('vaccination/check/all')
}

export const Vaccinate = (fId, resName, id, data) => {
  return http.POST(`vaccinating/${fId}/${resName}/${id}/create `, data)
}

export const listVaccination = (fId, id) => {
  return http.GET(`vaccinating/animal/${fId}/${id}/check/all`)
}

export const animalReport = (fId) => {
  return http.GET(`reports/${fId}/animal-farm-farmer`)
}

export const viewOneAnimal = (fId, params) => {
  return http.GET(`animal/${fId}/${params}`)
}

export const getMedecines = (fId) => {
  return http.GET(`medicine/check/all`)
}

export const listTreatment = (fId, id, type) => {
  return http.GET(`treatment/${fId}/${type}/${id}/check/all`)
}

export const createTreatment = (fId, resName, id, data) => {
  return http.POST(`treatment/${fId}/${resName}/${id}/create`, data)
}

export const createAccounting = (fId, id, data, type) => {
  return http.POST(`accounting/${fId}/${type}/${id}/create`, data)
}

export const listAccounting = (fId, id, type) => {
  return http.GET(`accounting/${fId}/${type}/${id}/check/all`)
}

export const createMeasurement = (fId, id, data) => {
  return http.POST(`measurement/${fId}/${id}/create`, data)
}
export const getMeasurements = (fId, id) => {
  return http.GET(`measurement/${fId}/${id}/check/all`)
}

export const allAnimalActivities = (fId, id, type) => {
  return http.GET(`activities/${fId}/${type}/${id}/check/all`)
}

export const createAnimalNote = (fId, resName, id, data) => {
  return http.POST(`notes/${fId}/${resName}/${id}/create`, data)
}

export const retrieveAnimalNotes = (fId, id) => {
  return http.GET(`notes/animal/${fId}/${id}/check/all`)
}

export const getOneAnimalNote = (fId, resName, resId, id) => {
  return http.GET(`notes/${fId}/${resName}/${resId}/${id} `)
}

export const createAnimalYield = (fId, id, data) => {
  return http.POST(`yield/animal/${id}/create`, data)
}

export const ListAnimalYield = (fId, id) => {
  return http.GET(`yield/animal/${id}/check/all`)
}

export const createAnimalBreed = (fId, id, data) => {
  return http.POST(`breeding/animal/${id}/create`, data)
}

export const ListAnimalBreed = (fId, id) => {
  return http.GET(`breeding/animal/${id}/check/all`)
}

export const SearchAnimalGroup = (fId, param) => {
  return http.GET(`animal/${fId}/?name=${param.name}`)
}

export const AddAnimalToGroup = (fId, groupId, animalId) => {
  return http.PUT(`animal/${fId}/${animalId}/${groupId}`)
}

export const viewGroupAnimal = (fId, groupId) => {
  return http.GET(`livestock_groups/${fId}/${groupId}`)
}
export const GetTreatmentReport = (fId) => {
  return http.GET(
    `reports/${fId}/livestock/treatments?startDate=2022-04-04&endDate=2023-04-04`
  )
}

export const upComingTreatmentReport = (fId) => {
  return http.GET(
    `reports/${fId}/livestock/upcoming_treatments?startDate=2022-04-04&endDate=2023-04-04`
  )
}
export const GetreportTypes = (fId) => {
  return http.GET(`reports/${fId}/types`)
}

export const GetContactApi = (fId) => {
  return http.GET(`contact/${fId}/check/all`)
}

export const AddAncestors = (fId, gender, parent, data) => {
  return http.POST(
    `animal/${fId}/new?gender=${gender}&parent_of=${parent}`,
    data
  )
}

export const AnimalOffSpring = (fId, id) => {
  return http.GET(`animal/${fId}/${id}/offstring`)
}
export const GetAllMales = (fId, id) => {
  return http.GET(`animal/${fId}/males/all`)
}
export const GetAllFemales = (fId, id) => {
  return http.GET(`animal/${fId}/females/all`)
}
export const GetAllAncestors = (fId, id) => {
  return http.GET(`animal/${fId}/${id}/ancestory`)
}

export const searchAnimal = (fId, name) => {
  return http.GET(`animal/${fId}/?name=${name.name}`)
}

//animal/c9149370-8420-492c-948e-18b353a7b75a/offstring
