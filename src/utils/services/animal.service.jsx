import * as http from './api';
export const createAnimal=(data)=>{
  return http.POST('animal/create',data);
};