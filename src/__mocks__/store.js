/*
 * Mocking store, using the actual store source code
 * Ispired by https://medium.com/@lucksp_22012/dont-use-mock-store-use-your-real-store-b319d7e4e22e
 */

import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/slices/user'

export default function mockStore() {
  return configureStore({ reducer: { user: userReducer } })
}
