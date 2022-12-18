import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IFilterValues } from '../../interface/IFilters'
import {
  FiltersTypes,
  resetFilters,
  toggleFilter,
} from '../../slices/filtersSlice'
import { RootState } from '../../store'
import FilterBadge from './FilterBadge'

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

export default function Filters() {
  const { categories, grades, races } = useSelector(
    (state: RootState) => state.filters
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetFilters())
  }, [dispatch])

  const handlerOnClick = useCallback(
    (filterIndex: number, filterType: FiltersTypes) => {
      dispatch(toggleFilter({ filterType, filterIndex }))
    },
    [dispatch]
  )

  return (
    <>
      <div className="mb-3">
        <h4>Categories</h4>
        <hr />
        <div className="d-flex flex-wrap">
          {categoriesList.map((filter, index) => (
            <FilterBadge
              key={`${index}_${filter.name}`}
              id={filter.id}
              name={filter.name}
              isActive={categories.includes(filter.id) === true ? true : false}
              onClickHandler={handlerOnClick}
              filterType="categories"
            />
          ))}
        </div>
      </div>
      <div className="mb-3">
        <h4>Grades</h4>
        <hr />
        <div className="d-flex flex-wrap">
          {gradesList.map((filter, index) => (
            <FilterBadge
              key={`${index}_${filter.name}`}
              id={filter.id}
              name={filter.name}
              isActive={grades.includes(filter.id) === true ? true : false}
              onClickHandler={handlerOnClick}
              filterType="grades"
            />
          ))}
        </div>
      </div>

      <div className="mb-3">
        <h4>Races</h4>
        <hr />
        <div className="d-flex flex-wrap">
          {racesList.map((filter, index) => (
            <FilterBadge
              key={`${index}_${filter.name}`}
              id={filter.id}
              name={filter.name}
              isActive={races.includes(filter.id) === true ? true : false}
              onClickHandler={handlerOnClick}
              filterType="races"
            />
          ))}
        </div>
      </div>
    </>
  )
}
