import * as http from './api'
export const createEvent = (fId, resName, id, data) => {
  return http.POST(`task/${fId}/${resName}/${id}/create`, data)
}
export const listEvent = (fId, id) => {
  return http.GET(`task/animal/${fId}/${id}/check/all`)
}
export const editEvent = (fId, resName, id, data) => {
  return http.PUT(`task/${fId}/${resName}/${id}`, data)
}
