import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createFarm,
  getFarmReport,
  getFarms,
} from "../../utils/services/farm.service";

export const farm = createAsyncThunk(
  "farm",
  async ({ data, success }, { rejectWithValue }) => {
    return createFarm(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        console.log(error);
        rejectWithValue(error);
      });
  }
);

export const getAllFarms = createAsyncThunk(
  "getAllfarms",
  async (props, { rejectWithValue }) => {
    return getFarms()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        console.log(error);
        rejectWithValue(error);
      });
  }
);

export const GetFarmReport = createAsyncThunk(
  "getFarmReport",
  async (props, { rejectWithValue }) => {
    return getFarmReport()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        console.log(error);
        rejectWithValue(error);
      });
  }
);

const initialState = {
  loading: false,
  error: "",
  get: {
    loading: false,
    data: [],
  },
  farmReport: {
    loading: false,
    data: [],
  },
};

const farmSlice = createSlice({
  name: "farm",
  initialState,
  reducers: {
    next: (state) => {
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(farm.pending, (state) => {
        state.loading = true;
      })
      .addCase(farm.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(farm.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAllFarms.pending, (state) => {
        state.get.loading = true;
      })
      .addCase(getAllFarms.fulfilled, (state, { payload }) => {
        state.get.loading = false;
        state.get.data = payload.data;
      })
      .addCase(getAllFarms.rejected, (state, { payload }) => {
        state.get.loading = false;
      })
      .addCase(GetFarmReport.pending, (state) => {
        state.farmReport.loading = true;
      })
      .addCase(GetFarmReport.fulfilled, (state, { payload }) => {
        state.farmReport.loading = false;
        console.log({ payload });
        state.farmReport.data = payload;
      })
      .addCase(GetFarmReport.rejected, (state, { payload }) => {
        state.farmReport.loading = false;
      });
  },
});

export default farmSlice.reducer;
