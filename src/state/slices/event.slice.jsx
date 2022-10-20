import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createEvent, listEvent } from "../../utils/services/event.service";

export const CreateEventApi = createAsyncThunk(
  "create-event",
  async ({ data, success }, { rejectWithValue }) => {
    return createEvent(data)
      .then(() => {
        success();
      })
      .catch((error) => {
        console.log(error);
        rejectWithValue(error);
      });
  }
);
export const ListEventApi = createAsyncThunk(
  "list-event",
  async (props, { rejectWithValue }) => {
    return listEvent()
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
  events: {
    loading: false,
    data: [],
  },
};

const eventSlice = createSlice({
  name: "create-event",
  initialState,
  reducers: {
    next: (state) => {
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateEventApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(CreateEventApi.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(CreateEventApi.rejected, (state) => {
        state.loading = false;
      })
      .addCase(ListEventApi.pending, (state) => {
        state.events.loading = true;
      })
      .addCase(ListEventApi.fulfilled, (state, { payload }) => {
        state.events.loading = false;
        payload.data.forEach((item) => {
          item.allDay = true;
        });
        state.events.data = payload.data;
      })
      .addCase(ListEventApi.rejected, (state) => {
        state.events.loading = false;
      });
  },
});

export default eventSlice.reducer;
