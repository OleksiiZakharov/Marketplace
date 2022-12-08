import { useDispatch } from 'react-redux'
import { FiltersTypes, toggleFilter } from '../../../slices/filtersSlice'

export interface IFilterValues {
  name: string
  id: number
}

const categoriesList: IFilterValues[] = [
  { name: 'Helmet', id: 0 },
  { name: 'Upper', id: 1 },
  { name: 'Lower', id: 2 },
  { name: 'Shoes', id: 3 },
  { name: 'Gauntlets', id: 4 },
  { name: 'Weapon', id: 5 },
  { name: 'Shield', id: 6 },
  { name: 'Amulet', id: 7 },
  { name: 'Ring', id: 8 },
  { name: 'Cloak', id: 9 },
]
const gradesList: IFilterValues[] = [
  { name: 'Normal', id: 0 },
  { name: 'Type B', id: 1 },
  { name: 'Type A', id: 2 },
  { name: 'Type C', id: 3 },
  { name: 'Relict', id: 4 },
  { name: 'Rare', id: 5 },
  { name: 'Hero', id: 6 },
  { name: 'Set', id: 7 },
  { name: 'Leon', id: 8 },
  { name: 'PvP', id: 9 },
]
const racesList: IFilterValues[] = [
  { name: 'Bellato', id: 0 },
  { name: 'Cora', id: 1 },
  { name: 'Acretia', id: 2 },
  { name: 'Bellato & Cora', id: 3 },
  { name: 'Any', id: 4 },
]

export const useFilters = () => {
  const dispatch = useDispatch()

  const handlerOnClick = (filterIndex: number, filterType: FiltersTypes) => {
    dispatch(toggleFilter({ filterType, filterIndex }))
  }

  return { categoriesList, gradesList, racesList, handlerOnClick }
}
