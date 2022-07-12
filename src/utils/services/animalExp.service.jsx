import * as http from './api';
export const createAnimalExpense = (data) => {
  return http.POST('animal-expense/create', data);
};
export const getAnimalExpenses = () => {
  return http.GET('animal-expense/check/all');
};
export const getItemsValue = () => {
  return http.GET('item/check/all');
};
export const AllCategories = () => {
  return http.GET('category/check/all');
};
