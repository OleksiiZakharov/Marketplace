import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { storage } from './../service/storage.service'

interface IUserInit {
  userId: number
  login: string
  token: string
  cash: number
}

const init = () => {
  const login: string = storage.get('login')
  const token: string = storage.get('token')
  const cash: number = storage.getNumber('cash')
  const userId: number = storage.getNumber('userId')

  return {
    userId,
    login,
    token,
    cash,
  }
}

const initialState: IUserInit = init()

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<IUserInit>) => {
      const { userId, login, cash, token } = action.payload
      storage.set('userId', userId)
      storage.set('login', login)
      storage.set('token', token)
      storage.set('cash', cash)

      state.userId = userId
      state.login = login
      state.cash = cash
      state.token = token
    },
    updateCash: (state, action: PayloadAction<number>) => {
      storage.set('cash', JSON.stringify(action.payload))
      state.cash = action.payload
    },
    resetUserData: (state) => {
      storage.clear()
      state.login = ''
      state.token = ''
      state.cash = 0
      state.userId = 0
    },
  },
})

export const { updateUserData, updateCash, resetUserData } = userSlice.actions

export default userSlice.reducer
