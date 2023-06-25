import * as http from './api'
export const createFarm = (data) => {
  return http.POST('farm/create', data)
}
export const getFarms = () => {
  return http.GET('farm/check/all')
}
export const getFarmReport = () => {
  return http.GET('reports/farmers-district')
}
export const viewOneFarm = (param) => {
  return http.GET(`farm/${param}`)
}
export const FarmReportTransactions = (param) => {
  return http.GET(`reports/farm/accounting/${param}`)
}

export const FarmReportCashflow = (param) => {
  return http.GET(`reports/farm/${param}/cash_flow`)
}
export const FarmReportPLstatement = (param) => {
  return http.GET(`reports/farm/${param}/pl`)
}
export const FarmGetUsers = (id) => {
  return http.GET(`people/${id}/check/all`)
}
export const FarmAddUsers = (id, data) => {
  console.log({ id }, { data })
  return http.POST(`people/${id}/create`, data)
}
