import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilters } from '../../slices/filtersSlice'
import { RootState } from '../../store'
import FilterBlocks from './FilterBlocks'
import { useFilters } from './hooks/useFilters'

export default function Filters() {
  const { categoriesList, gradesList, racesList, handlerOnClick } = useFilters()
  const { categories, grades, races } = useSelector(
    (state: RootState) => state.filters
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetFilters())
  }, [dispatch])

  return (
    <>
      <FilterBlocks
        categoryName="Categories"
        badges={categoriesList}
        onClickHandler={handlerOnClick}
        filterType="categories"
        filtersState={categories}
      ></FilterBlocks>
      <FilterBlocks
        categoryName="Grades"
        badges={gradesList}
        onClickHandler={handlerOnClick}
        filterType="grades"
        filtersState={grades}
      ></FilterBlocks>
      <FilterBlocks
        categoryName="Races"
        badges={racesList}
        onClickHandler={handlerOnClick}
        filterType="races"
        filtersState={races}
      ></FilterBlocks>
    </>
  )
}
