import * as http from './api';
export const authenticateAdmin=(data)=>{
  return http.POST('user/login',data);
};