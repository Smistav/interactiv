import { configureStore } from '@reduxjs/toolkit'
import bothSlice from './slices/bothSlice'
import modalSlice from './slices/modalSlice'
export const store = configureStore({
  reducer: {
    both: bothSlice,
    modal: modalSlice,
  },
})
