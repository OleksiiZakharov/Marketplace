import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IUserInit {
  status: string
  message: string
}
const initialState: IUserInit = {
  status: '',
  message: '',
}

export const messageSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateMessage: (state, action: PayloadAction<IUserInit>) => {
      const { status, message } = action.payload
      state.status = status
      state.message = message
    },
    resetMessage: (state) => {
      state.message = ''
    },
  },
})

export const { updateMessage, resetMessage } = messageSlice.actions

export default messageSlice.reducer
