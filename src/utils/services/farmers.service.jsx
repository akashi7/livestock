import * as http from './api'
export const createFarmer = (fId, data) => {
  return http.POST(`farmer/${fId}/create`, data)
}
export const getFarmers = (fId, id) => {
  return http.GET(`farmer/${fId}/check/all`)
}
