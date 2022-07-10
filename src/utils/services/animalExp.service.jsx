import * as http from './api';
export const createAnimalExpense=(data)=>{
  return http.POST('animal-expense/create',data);
};