import * as http from './api';
export const createFarmer=(data)=>{
  return http.POST('farmer/create',data);
};