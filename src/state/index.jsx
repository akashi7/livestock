import { configureStore } from '@reduxjs/toolkit';
import animalSlice from './slices/animal.slice';
import animalExpSlice from './slices/animalExp.slice';
import authSlice from './slices/auth.slice';
import farmSlice from './slices/farm.slice';
import farmerSlice from './slices/farmer.slice';
import sidebarSlice from './slices/sidebar.slice';
const Store = configureStore({
  reducer: {
    auth: authSlice,
    sidebar: sidebarSlice,
    farmer: farmerSlice,
    animal: animalSlice,
    farm: farmSlice,
    animalExpenses: animalExpSlice,
  },
});
export default Store;
