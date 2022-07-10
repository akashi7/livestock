import * as http from './api';
export const authenticateAdmin=(data)=>{
  return http.POST('auth/admin-login',data);
};