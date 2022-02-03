import { createSlice } from '@reduxjs/toolkit'

const DISABLE_AUTH = false

export const userSlice = createSlice({
  name: 'counter',
  initialState: !DISABLE_AUTH
    ? {
        name: '',
        token: ''
      }
    : {
        name: 'admin',
        token: 'admin-token-0'
      },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    }
  }
})

export const { setName, setToken } = userSlice.actions
export default userSlice.reducer
