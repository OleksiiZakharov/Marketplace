import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type FiltersTypes = 'categories' | 'grades' | 'races'

export interface IFiltersInit {
  categories: number[]
  grades: number[]
  races: number[]
  page: number
  onPage: number
}

interface IToggleFilterPayload {
  filterType: FiltersTypes
  filterIndex: number
}

const initialState: IFiltersInit = {
  categories: [],
  grades: [],
  races: [],
  page: 1,
  onPage: !localStorage.getItem('onPage')
    ? 6
    : Number(localStorage.getItem('onPage')),
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter: (
      state: IFiltersInit,
      action: PayloadAction<IToggleFilterPayload>
    ) => {
      const { filterType, filterIndex } = action.payload
      state.page = 1
      if (state[filterType].includes(filterIndex)) {
        state[filterType] = state[filterType].filter(
          (value) => value !== filterIndex
        )
      } else {
        state[filterType].push(filterIndex)
      }
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOnPage: (state, action: PayloadAction<number>) => {
      localStorage.setItem('onPage', String(action.payload))
      state.onPage = action.payload
    },

    incrementPage: (state) => {
      state.page = state.page + 1
    },
    decrementPage: (state) => {
      state.page = state.page - 1
    },
    resetFilters: (state) => {
      state.page = 1
      state.categories = []
      state.grades = []
      state.races = []
    },
  },
})

export const {
  toggleFilter,
  setPage,
  setOnPage,
  incrementPage,
  decrementPage,
  resetFilters,
} = filtersSlice.actions

export default filtersSlice.reducer
