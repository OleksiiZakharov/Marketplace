import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { totalItemsCount } from '../../slices/filtersSlice'
import { updateCash } from '../../slices/userSlice'
import { RootState } from '../../store'
import useMessage from '../Message/hooks/useMessage'
import { ItemsService } from './items.service'

export const ItemsListApi = () => {
  const dispatch = useDispatch()
  const { setMessage } = useMessage()
  const { categories, grades, races, page, onPage } = useSelector(
    (state: RootState) => state.filters
  )

  const { isLoading, isError, isSuccess, data } = useQuery(
    ['MarketplaceApi_itemsList', page, onPage, categories, grades, races],
    () => ItemsService.getItems(page, onPage, categories, grades, races),
    {
      onSuccess: ({ data }) => {
        const { status, message, responce } = data
        if (status === 'error') {
          setMessage(status, message)
        }

        const { itemsCount } = responce
        dispatch(totalItemsCount(itemsCount))
      },
    }
  )

  return { isLoading, isError, data, isSuccess }
}

interface IBuyItemParams {
  login: string
  token: string
  itemId: number
}

export const BuyItem = () => {
  const dispatch = useDispatch()
  const { setMessage } = useMessage()
  const queryClient = useQueryClient()
  return useMutation(
    'MarketplaceApi_buyItem',
    ({ login, token, itemId }: IBuyItemParams) =>
      ItemsService.buyItem(login, token, itemId),
    {
      onSuccess: ({ data }) => {
        const { status, message, responce } = data
        setMessage(status, message)
        if (status === 'success') {
          dispatch(updateCash(Number(responce.cash)))
        }
        queryClient.refetchQueries('MarketplaceApi_itemsList')
      },
    }
  )
}
