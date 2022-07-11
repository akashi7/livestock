import * as http from './api';
export const createAnimal = (data) => {
  return http.POST('animal/create', data);
};
export const getAnimalsData = () => {
  return http.GET('animal/check/all');
};
