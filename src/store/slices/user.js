import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    name: '',
    token: ''
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
