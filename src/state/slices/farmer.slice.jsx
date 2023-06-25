import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createFarmer, getFarmers } from '../../utils/services/farmers.service'

export const farmer = createAsyncThunk(
  'farmer',
  async ({ fId, data, success }, { rejectWithValue }) => {
    return createFarmer(fId, data)
      .then((resp) => {
        console.log(resp)
        success()
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const getfarmers = createAsyncThunk(
  'getAllFarmers',
  async ({ fId }, { rejectWithValue }) => {
    return getFarmers(fId)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)
const initialState = {
  loading: false,
  get: {
    loading: false,
    data: [],
  },
}

const farmerSlice = createSlice({
  name: 'farmer',
  initialState,
  reducers: {
    next: (state) => {
      console.log(state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(farmer.pending, (state) => {
        state.loading = true
        console.log(state)
      })
      .addCase(farmer.fulfilled, (state) => {
        state.loading = false
        console.log(state)
      })
      .addCase(farmer.rejected, (state) => {
        state.loading = false
        console.log(state)
      })
      .addCase(getfarmers.pending, (state) => {
        state.get.loading = true
        console.log(state)
      })
      .addCase(getfarmers.fulfilled, (state, { payload }) => {
        state.get.loading = false
        state.get.data = payload.data
      })
      .addCase(getfarmers.rejected, (state) => {
        state.get.loading = false
        console.log(state)
      })
  },
})

export default farmerSlice.reducer
