import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createAnimal,
  getAnimalsData,
} from '../../utils/services/animal.service';

export const animal = createAsyncThunk(
  'animal',
  async ({ data, success }, { rejectWithValue }) => {
    return createAnimal(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        console.log(error);
        rejectWithValue(error);
      });
  },
);
export const getAnimals = createAsyncThunk(
  'getanimals',
  async (props, { rejectWithValue }) => {
    return getAnimalsData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  },
);
const initialState = {
  loading: false,
  get: {
    loading: false,
    data: [],
  },
};

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    next: (state) => {
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(animal.pending, (state) => {
        state.loading = true;
      })
      .addCase(animal.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(animal.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAnimals.pending, (state) => {
        state.get.loading = true;
      })
      .addCase(getAnimals.fulfilled, (state, { payload }) => {
        state.get.loading = false;
        state.get.data = payload.data;
      });
  },
});

export default animalSlice.reducer;
