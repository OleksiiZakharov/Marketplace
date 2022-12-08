import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementPage,
  incrementPage,
  setPage,
} from '../../../slices/filtersSlice'
import { RootState } from '../../../store'

interface ICreateBtnObject {
  name: string
  handler: Function
  title: string
  isActive: boolean
}
const createBtnObject = (
  name: string,
  title: string,
  handler: Function,
  isActive: boolean
): ICreateBtnObject => {
  return { name, title, handler, isActive }
}

const handlers = (page: number, totalPages: number, dispatch: Dispatch) => {
  const handlerPageOnClick = (page: number) => {
    dispatch(setPage(page))
  }

  const handlerFirstPage = () => {
    dispatch(setPage(1))
  }

  const handlerPrevPage = () => {
    if (page - 1 < 1) return
    dispatch(decrementPage())
  }

  const handlerNextPage = () => {
    if (page + 1 > totalPages) return
    dispatch(incrementPage())
  }

  const handlerLastPage = () => {
    dispatch(setPage(totalPages))
  }
  return {
    handlerPageOnClick,
    handlerFirstPage,
    handlerPrevPage,
    handlerNextPage,
    handlerLastPage,
  }
}

const firstAndLastBlocksNumbers = (
  page: number,
  blocksNum: number,
  maxPages: number
) => {
  let beginBlock =
    page - Math.floor(blocksNum / 2) <= 1 ? 1 : page - Math.floor(blocksNum / 2)

  if (beginBlock + blocksNum > maxPages) {
    return {
      beginBlock: maxPages - blocksNum < 1 ? 1 : maxPages - blocksNum,
      endBlock: maxPages,
    }
  } else {
    return {
      beginBlock,
      endBlock: beginBlock + blocksNum - 1,
    }
  }
}

export const usePagination = (): ICreateBtnObject[] => {
  const dispatch = useDispatch()
  const {
    page,
    onPage,
    blocksNum,
    totalItemsCount: totalItems,
  } = useSelector((state: RootState) => state.filters)

  const maxPages =
    totalItems % onPage === 0
      ? totalItems / onPage
      : Math.floor(totalItems / onPage) + 1

  const { beginBlock, endBlock } = firstAndLastBlocksNumbers(
    page,
    blocksNum,
    maxPages
  )

  const {
    handlerPageOnClick,
    handlerFirstPage,
    handlerPrevPage,
    handlerNextPage,
    handlerLastPage,
  } = handlers(page, maxPages, dispatch)

  const pages: ICreateBtnObject[] = []
  pages.push(createBtnObject('<<', 'First page', handlerFirstPage, false))
  pages.push(createBtnObject('<', 'Prev page', handlerPrevPage, false))

  for (let i = beginBlock; i <= endBlock; i++) {
    pages.push(
      createBtnObject(
        String(i),
        String(i),
        handlerPageOnClick,
        i === page ? true : false
      )
    )
  }

  pages.push(createBtnObject('>', 'Next page', handlerNextPage, false))
  pages.push(createBtnObject('>>', 'Last page', handlerLastPage, false))

  return pages
}
