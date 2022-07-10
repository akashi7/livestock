import * as http from './api';
export const createFarmer=(data)=>{
  return http.POST('farmer/create',data);
};
export const getFarmers=()=>{
  return http.GET('farmer/check/all');
}