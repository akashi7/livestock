import * as http from './api'
export const createAnimal = (data) => {
  return http.POST('animal/create', data)
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
  return http.POST(`feeding/${ResName}/${id}/create`, data)
}
export const getFeedData = (id) => {
  return http.GET(`feeding/animal/${id}/check/all`)
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

//activities/animal/1/check/all
