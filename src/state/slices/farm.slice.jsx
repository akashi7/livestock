import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  FarmReportCashflow,
  FarmReportPLstatement,
  FarmReportTransactions,
  createFarm,
  getFarmReport,
  getFarms,
  viewOneFarm,
  FarmGetUsers,
  FarmAddUsers,
} from '../../utils/services/farm.service'

export const farm = createAsyncThunk(
  'farm',
  async ({ data, success }, { rejectWithValue }) => {
    return createFarm(data)
      .then((resp) => {
        localStorage.setItem('fId', resp.data.data.id)
        localStorage.setItem('fName', resp.data.data.name)
        success()
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const getAllFarms = createAsyncThunk(
  'getAllfarms',
  async (props, { rejectWithValue }) => {
    return getFarms()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const ViewOnefarm = createAsyncThunk(
  'view-one-farm',
  async ({ param }, { rejectWithValue }) => {
    return viewOneFarm(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const GetFarmReport = createAsyncThunk(
  'getFarmReport',
  async (props, { rejectWithValue }) => {
    return getFarmReport()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const GetFarmTransactionReport = createAsyncThunk(
  'getFarmReporttra',
  async ({ param }, { rejectWithValue }) => {
    return FarmReportTransactions(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const FarmCashflow = createAsyncThunk(
  'getFarmReportcash',
  async ({ param }, { rejectWithValue }) => {
    return FarmReportCashflow(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const FarmPL = createAsyncThunk(
  'getFarmReportpl',
  async ({ param }, { rejectWithValue }) => {
    return FarmReportPLstatement(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)
export const FarmGetUsersLists = createAsyncThunk(
  'getUsers',
  async ({ farmId }, { rejectWithValue }) => {
    return FarmGetUsers(farmId)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const FarmAddUsersLists = createAsyncThunk(
  'AddfUsers',
  async ({ farmId, data, success }, { rejectWithValue }) => {
    return FarmAddUsers(farmId, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

const initialState = {
  loading: false,
  error: '',
  get: {
    loading: false,
    data: [],
  },
  farmReport: {
    loading: false,
    data: [],
  },
  oneFarm: {
    loading: false,
    data: {},
  },
  transaction: {
    loading: false,
    data: {},
  },
  cashflow: {
    loading: false,
    data: {},
  },
  pl: {
    loading: false,
    data: {},
  },
  users: {
    loading: false,
    data: [],
  },
  user: {
    loading: false,
  },
}

const farmSlice = createSlice({
  name: 'farm',
  initialState,
  reducers: {
    next: (state) => {
      console.log(state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(farm.pending, (state) => {
        state.loading = true
      })
      .addCase(farm.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(farm.rejected, (state) => {
        state.loading = false
      })
      .addCase(getAllFarms.pending, (state) => {
        state.get.loading = true
      })
      .addCase(getAllFarms.fulfilled, (state, { payload }) => {
        state.get.loading = false
        state.get.data = payload.data
      })
      .addCase(getAllFarms.rejected, (state, { payload }) => {
        state.get.loading = false
      })
      .addCase(GetFarmReport.pending, (state) => {
        state.farmReport.loading = true
      })
      .addCase(GetFarmReport.fulfilled, (state, { payload }) => {
        state.farmReport.loading = false
        state.farmReport.data = payload
      })
      .addCase(GetFarmReport.rejected, (state, { payload }) => {
        state.farmReport.loading = false
      })
      .addCase(ViewOnefarm.pending, (state) => {
        state.oneFarm.loading = true
      })
      .addCase(ViewOnefarm.fulfilled, (state, { payload }) => {
        state.oneFarm.loading = false
        state.oneFarm.data = payload.data
      })
      .addCase(ViewOnefarm.rejected, (state) => {
        state.oneFarm.loading = false
      })
      .addCase(GetFarmTransactionReport.pending, (state) => {
        state.transaction.loading = true
      })
      .addCase(GetFarmTransactionReport.fulfilled, (state, { payload }) => {
        state.transaction.loading = false
        state.transaction.data = payload.results
      })
      .addCase(GetFarmTransactionReport.rejected, (state) => {
        state.transaction.loading = false
      })
      .addCase(FarmCashflow.pending, (state) => {
        state.cashflow.loading = true
      })
      .addCase(FarmCashflow.fulfilled, (state, { payload }) => {
        state.cashflow.loading = false
        state.cashflow.data = payload.cashflow
      })
      .addCase(FarmCashflow.rejected, (state) => {
        state.cashflow.loading = false
      })
      .addCase(FarmPL.pending, (state) => {
        state.pl.loading = true
      })
      .addCase(FarmPL.fulfilled, (state, { payload }) => {
        state.pl.loading = false
        state.pl.data = payload.pl
      })
      .addCase(FarmPL.rejected, (state) => {
        state.pl.loading = false
      })
      .addCase(FarmGetUsersLists.pending, (state) => {
        state.users.loading = true
      })
      .addCase(FarmGetUsersLists.fulfilled, (state, { payload }) => {
        state.users.loading = false
        state.users.data = payload.data
      })
      .addCase(FarmGetUsersLists.rejected, (state) => {
        state.users.loading = false
      })
      .addCase(FarmAddUsersLists.pending, (state) => {
        state.user.loading = true
      })
      .addCase(FarmAddUsersLists.fulfilled, (state) => {
        state.user.loading = false
      })
      .addCase(FarmAddUsersLists.rejected, (state) => {
        state.user.loading = false
      })
  },
})

export default farmSlice.reducer
