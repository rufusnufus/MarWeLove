import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'

// TODO: for persistence https://stackoverflow.com/a/61921430/6446389
export default configureStore({ reducer: { user: userReducer } })
