import * as http from "./api";
export const createEvent = (data) => {
  return http.POST("event/create", data);
};
export const listEvent = () => {
  return http.GET("event/check/all");
};
