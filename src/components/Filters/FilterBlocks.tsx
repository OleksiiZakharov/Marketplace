import { FiltersTypes } from '../../slices/filtersSlice'
import { IFilterValues } from './hooks/useFilters'
import css from './css/badge.module.css'

interface IFilterBlockProps {
  badges: IFilterValues[]
  categoryName: string
  filterType: FiltersTypes
  filtersState: number[]
  onClickHandler: (filterIndex: number, filterType: FiltersTypes) => void
}

export default function FilterBlocks({
  badges,
  categoryName,
  filterType,
  filtersState,
  onClickHandler,
}: IFilterBlockProps) {
  return (
    <>
      <div className="mb-3">
        <h4>{categoryName}</h4>
        <hr />
        <div className="d-flex flex-wrap">
          {badges.map((filter) => (
            <div
              key={`filter_${filter.name}`}
              className={`flex-fill ${css.badgeBlock} ${
                filtersState.includes(filter.id) === true
                  ? css.activeFilter
                  : ''
              }`}
              onClick={() => onClickHandler(filter.id, filterType)}
            >
              {filter.name}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
