import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filtersSlice'
import userReducer from './slices/userSlice'
import messageReducer from './slices/messageSlice'
import paginationReducer from './slices/paginationSlice'

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    user: userReducer,
    message: messageReducer,
    pagination: paginationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
