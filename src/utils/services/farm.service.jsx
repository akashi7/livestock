import * as http from './api';
export const createFarm = (data) => {
  return http.POST('farm/create', data);
};
export const getFarms = () => {
  return http.GET('farm/check/all');
};
