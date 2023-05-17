import * as http from './api'
export const authenticateAdmin = (data) => {
  return http.POST('user/login', data)
}
export const signUpAdmin = (data) => {
  return http.POST('user/signup', data)
}
