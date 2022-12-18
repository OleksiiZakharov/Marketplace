import React from 'react'
import css from './css/badge.module.css'
import { FiltersTypes } from '../../slices/filtersSlice'

interface IProps {
  id: number
  name: string
  onClickHandler: (filterIndex: number, filterType: FiltersTypes) => void
  isActive: boolean
  filterType: FiltersTypes
}

function FilterBadge({
  id,
  name,
  onClickHandler,
  isActive,
  filterType,
}: IProps) {
  return (
    <div
      key={`filter_${name}`}
      className={`flex-fill ${css.badgeBlock} ${
        isActive === true ? css.activeFilter : ''
      }`}
      onClick={() => onClickHandler(id, filterType)}
    >
      {name}
    </div>
  )
}

export default React.memo(FilterBadge)
