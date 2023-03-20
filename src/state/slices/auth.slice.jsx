import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authenticateAdmin } from '../../utils/services/auth.service'
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
const initialState = {
  loading: false,
  authenticated: false,
  user: {},
  error: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    next: (state) => {
      console.log(state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAdmin.pending, (state) => {
        state.loading = true
        console.log(state)
      })
      .addCase(authAdmin.fulfilled, (state) => {
        state.loading = false
        console.log(state)
      })
      .addCase(authAdmin.rejected, (state) => {
        state.loading = false
        console.log(state)
      })
  },
})

export default authSlice.reducer
