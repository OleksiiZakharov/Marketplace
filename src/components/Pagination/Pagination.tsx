import { usePagination } from './hooks/usePagination'
import css from './css/pagination.module.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setTotalItemsCount } from '../../slices/paginationSlice'

export default function Pagination() {
  const { pages, totalItems } = usePagination()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setTotalItemsCount(0))
  }, [dispatch])

  return (
    <>
      {totalItems > 0 ? (
        <ul className={`pagination`}>
          {pages.map((page, index) => (
            <li
              key={`page_${index}`}
              className={`page-item ${css.paginationItem}`}
            >
              <div
                className={`page-link ${page.isActive ? css.activePage : null}`}
                onClick={() => page.handler(+page.name)}
                title={page.title}
              >
                <span>{page.name}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}
