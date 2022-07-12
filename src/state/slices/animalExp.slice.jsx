import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  AllCategories,
  createAnimalExpense,
  getAnimalExpenses,
  getItemsValue,
} from '../../utils/services/animalExp.service';

export const animalExpense = createAsyncThunk(
  'animalExpense',
  async ({ data, success }, { rejectWithValue }) => {
    return createAnimalExpense(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  },
);
export const getAllAnimalExpense = createAsyncThunk(
  'getAnimalExpense',
  async (props, { rejectWithValue }) => {
    return getAnimalExpenses()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  },
);
export const getItems = createAsyncThunk(
  'getItems',
  async (props, { rejectWithValue }) => {
    return getItemsValue()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  },
);

export const getCategories = createAsyncThunk(
  'getCategoriesItems',
  async (props, { rejectWithValue }) => {
    return AllCategories()
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
  items: {
    loading: false,
    data: [],
  },
  catg: {
    loading: false,
    data: [],
  },
};

const animalExpenseSlice = createSlice({
  name: 'animalExpense',
  initialState,
  reducers: {
    next: (state) => {
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(animalExpense.pending, (state) => {
        state.loading = true;
        console.log(state);
      })
      .addCase(animalExpense.fulfilled, (state) => {
        state.loading = false;
        console.log(state);
      })
      .addCase(animalExpense.rejected, (state) => {
        state.loading = false;
        console.log(state);
      })
      .addCase(getAllAnimalExpense.pending, (state) => {
        state.get.loading = true;
      })
      .addCase(getAllAnimalExpense.fulfilled, (state, { payload }) => {
        state.get.loading = false;
        state.get.data = payload.data;
      })
      .addCase(getItems.pending, (state) => {
        state.items.loading = true;
      })
      .addCase(getItems.fulfilled, (state, { payload }) => {
        state.items.loading = false;
        state.items.data = payload.data;
      })
      .addCase(getCategories.pending, (state) => {
        state.catg.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.catg.loading = false;
        state.catg.data = payload.data;
      });
  },
});

export default animalExpenseSlice.reducer;
