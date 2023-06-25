import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createEvent,
  editEvent,
  listEvent,
} from '../../utils/services/event.service'

export const CreateEventApi = createAsyncThunk(
  'create-event',
  async ({ fId, resName, id, data, success }, { rejectWithValue }) => {
    return createEvent(fId, resName, id, data)
      .then(() => {
        success()
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)
export const ListEventApi = createAsyncThunk(
  'list-event',
  async ({ fId, param }, { rejectWithValue }) => {
    return listEvent(fId, param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const EditEventApi = createAsyncThunk(
  'edit-event',
  async ({ fId, resName, id, data, success }, { rejectWithValue }) => {
    return editEvent(fId, resName, id, data)
      .then((resp) => {
        return success()
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)
const initialState = {
  loading: false,
  events: {
    loading: false,
    data: [],
  },
}

const eventSlice = createSlice({
  name: 'create-event',
  initialState,
  reducers: {
    next: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateEventApi.pending, (state) => {
        state.loading = true
      })
      .addCase(CreateEventApi.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(CreateEventApi.rejected, (state) => {
        state.loading = false
      })
      .addCase(ListEventApi.pending, (state) => {
        state.events.loading = true
      })
      .addCase(ListEventApi.fulfilled, (state, { payload }) => {
        state.events.loading = false
        payload.data.forEach((item) => {
          item.allDay = true
          item.start = item.start_time
          item.end = item.end_time
        })
        state.events.data = payload.data
      })
      .addCase(ListEventApi.rejected, (state) => {
        state.events.loading = false
      })
      .addCase(EditEventApi.pending, (state) => {
        state.events.loading = true
      })
      .addCase(EditEventApi.fulfilled, (state) => {
        state.events.loading = false
      })
      .addCase(EditEventApi.rejected, (state) => {
        state.events.loading = false
      })
  },
})

export default eventSlice.reducer
