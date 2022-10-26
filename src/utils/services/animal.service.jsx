import * as http from "./api";
export const createAnimal = (data) => {
  return http.POST("animal/create", data);
};
export const createGroupAnimal = (data) => {
  return http.POST("groupAnimal/create", data);
};
export const createSickBay = (data) => {
  return http.POST("sickbay/create", data);
};
export const getAnimalsSickbayData = () => {
  return http.GET("sickbay/check/all");
};
export const getAnimalsGroupData = () => {
  return http.GET("groupAnimal/check/all");
};
export const getAnimalsData = () => {
  return http.GET("animal/check/all");
};
export const getAnimalsCatData = () => {
  return http.GET("animalcategory/check/all");
};
export const getPurposeData = () => {
  return http.GET("purposelist/check/all");
};

export const createFeedData = (data) => {
  return http.POST("animalfeed/create", data);
};
export const getFeedData = () => {
  return http.GET("animalfeed/check/all");
};

export const getFeedIdsData = () => {
  return http.GET("feed/check/all");
};
export const createCategoryData = (data) => {
  return http.GET("animalcategory/create", data);
};

export const vaccinationData = () => {
  return http.GET("vaccination/check/all");
};

export const Vaccinate = (data) => {
  return http.POST("vaccinating/create", data);
};

export const listVaccination = () => {
  return http.GET("vaccinating/check/all");
};
