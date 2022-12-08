import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filtersSlice'
import userReducer from './slices/userSlice'
import messageReducer from './slices/messageSlice'

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    user: userReducer,
    message: messageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
