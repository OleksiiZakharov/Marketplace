import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IPagination {
  totalItemsCount: number
  blocksNum: number
}

const initialState: IPagination = {
  blocksNum: 5,
  totalItemsCount: 0,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setTotalItemsCount: (state, action: PayloadAction<number>) => {
      state.totalItemsCount = action.payload
    },
  },
})

export const { setTotalItemsCount } = paginationSlice.actions

export default paginationSlice.reducer
