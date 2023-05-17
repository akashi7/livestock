import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  authenticateAdmin,
  signUpAdmin,
} from '../../utils/services/auth.service'
import { notification } from 'antd'

export const authAdmin = createAsyncThunk(
  'auth-admin',
  async ({ data, success }, { rejectWithValue }) => {
    return authenticateAdmin(data)
      .then((resp) => {
        success()
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('user', JSON.stringify(resp.data.user))
      })
      .catch((error) => {
        notification.error({
          placement: 'topRight',
          message: error.response.data.error,
          duration: 5,
          key: 'error',
        })
        rejectWithValue(error)
      })
  }
)
export const authSignUp = createAsyncThunk(
  'auth-admin-signup',
  async ({ data, success }, { rejectWithValue }) => {
    return signUpAdmin(data)
      .then((resp) => {
        success()
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('user', JSON.stringify(resp.data.data))
      })
      .catch((error) => {
        notification.error({
          placement: 'topRight',
          message: error.response.data.error,
          duration: 5,
          key: 'error',
        })
        rejectWithValue(error)
      })
  }
)
const initialState = {
  loading: false,
  authenticated: false,
  user: {},
  error: '',
  loader: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    next: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAdmin.pending, (state) => {
        state.loading = true
      })
      .addCase(authAdmin.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(authAdmin.rejected, (state) => {
        state.loading = false
      })
      .addCase(authSignUp.pending, (state) => {
        state.loader = true
      })
      .addCase(authSignUp.fulfilled, (state) => {
        state.loader = false
      })
      .addCase(authSignUp.rejected, (state) => {
        state.loader = false
      })
  },
})

export default authSlice.reducer
