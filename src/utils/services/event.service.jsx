import * as http from "./api";
export const createEvent = (resName, id, data) => {
  return http.POST(`task/${resName}/${id}/create`, data);
};
export const listEvent = (id) => {
  return http.GET(`task/animal/${id}/check/all`);
};
